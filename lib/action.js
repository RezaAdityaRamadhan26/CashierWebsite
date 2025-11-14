"use server";

// Ganti 'connection' menjadi 'pool'
import pool from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function register(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password1 = formData.get("password1");
  const password2 = formData.get("password2");

  if (password1 !== password2) {
    console.log("register gagal: password tidak sama");
    return;
  }

  // Gunakan 'pool'
  await pool.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password1]
  );

  redirect("/login");
}

export async function findUserByEmail(email) {
  // Gunakan 'pool'
  const [user] = await pool.execute("select * from users where email = ?", [
    email,
  ]);

  if (!user.length) return null;

  return user[0];
}

export async function fetchItems() {
  // Gunakan 'pool'
  const [items] = await pool.query(`
        SELECT * FROM PRODUCTS;
    `);

  return items;
}

export async function pushProduct(formData) {
  const userId = 1;

  const product_name = formData.get("product_name");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const product_image = formData.get("product_image");

  // Gunakan 'pool'
  await pool.execute(
    `INSERT INTO products (user_id, product_name, price, stock, product_image)
      VALUES (?, ?, ?, ?, ?)`,
    [userId, product_name, price, stock || 0, product_image]
  );

  revalidatePath("/items");
}

export async function deleteData(formData) {
  const id = formData.get("id");

  // Gunakan 'pool'
  await pool.execute(`DELETE FROM products WHERE product_id = ?`, [id]);

  revalidatePath("/items");
}
export async function updateProduct(formData) {
  const product_id = formData.get("product_id");
  const product_name = formData.get("product_name");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const product_image = formData.get("product_image");

  // Gunakan 'pool'
  await pool.execute(
    `UPDATE products 
      SET product_name = ?, price = ?, stock = ?, product_image = ? 
      WHERE product_id = ?`,
    [product_name, price, stock, product_image, product_id]
  );

  revalidatePath("/items");
}

export async function createTransaction(cart, paymentMethod) {
  if (!cart || cart.length === 0) {
    return { error: "Keranjang tidak boleh kosong." };
  }

  let userId;
  try {
    const session = await getServerSession(authOptions);
    userId = session?.user?.id;

    if (!userId) {
      userId = 1;
    }
  } catch (e) {
    console.error(e);
    return { error: "Gagal mendapatkan session user." };
  }

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  let db;
  try {
    // Gunakan 'pool.getConnection()'
    db = await pool.getConnection();

    await db.beginTransaction();

    const [transactionResult] = await db.execute(
      `INSERT INTO transactions (user_id, total_amount, payment_method) 
       VALUES (?, ?, ?)`,
      [userId, totalAmount, paymentMethod]
    );

    const transactionId = transactionResult.insertId;

    const itemPromises = cart.map((item) => {
      return db.execute(
        `INSERT INTO transaction_items (transaction_id, product_id, quantity, price_per_item) 
         VALUES (?, ?, ?, ?)`,
        [transactionId, item.product_id, item.quantity, item.price]
      );
    });

    await Promise.all(itemPromises);

    const stockPromises = cart.map((item) => {
      return db.execute(
        `UPDATE products SET stock = stock - ? WHERE product_id = ?`,
        [item.quantity, item.product_id]
      );
    });
    await Promise.all(stockPromises);

    await db.commit();

    revalidatePath("/(main)/dashboard");

    return { success: true, transactionId: transactionId };
  } catch (error) {
    if (db) await db.rollback();
    console.error("Gagal membuat transaksi:", error);
    return { error: "Gagal memproses pesanan." };
  } finally {
    if (db) db.release();
  }
}

export async function fetchTransactionsForDashboard() {
  try {
    const userId = 1;

    // Gunakan 'pool'
    const [rows] = await pool.execute(
      `SELECT
        t.transaction_id AS id,
        p.product_name AS name,
        ti.quantity AS qty,
        (ti.quantity * ti.price_per_item) AS amount,
        t.payment_method AS sales,
        t.created_at AS date
      FROM transactions t
      JOIN transaction_items ti ON t.transaction_id = ti.transaction_id
      JOIN products p ON ti.product_id = p.product_id
      WHERE t.user_id = ?
      ORDER BY t.created_at DESC
      LIMIT 10`,
      [userId]
    );

    if (!rows.length) return [];

    return rows.map((row) => ({
      ...row,
      amount: parseFloat(row.amount),
      date: new Date(row.date).toISOString(),
    }));
  } catch (error) {
    console.error("Gagal mengambil data transaksi:", error);
    return [];
  }
}