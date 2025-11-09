"use server";

import connection from "./db";
import { redirect } from "next/navigation";

export async function register(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password1 = formData.get("password1");
  const password2 = formData.get("password2");

  if (password1 !== password2) {
    console.log("register gagal: password tidak sama");
    return;
  }

  await connection.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password1]
  );

  redirect("/login");
}

export async function findUserByEmail(email) {
    const [user] = await connection.execute("select * from users where email = ?",[email])

    if(!user.length) return null

    return user[0]

}