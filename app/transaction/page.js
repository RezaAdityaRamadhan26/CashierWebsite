"use client";
// Halaman ini memerlukan state, jadi kita gunakan "use client"
import { useState } from 'react';
import { Search, Bell, User, Plus, Minus } from 'lucide-react';

// Data dummy untuk produk
const products = [
  { id: 1, name: 'Kue Ape', price: 5000, stock: 16, img: 'https://placehold.co/200x150/a6e3a1/333?text=Kue+Ape' },
  { id: 2, name: 'Lumpia', price: 8000, stock: 11, img: 'https://placehold.co/200x150/f9e2af/333?text=Lumpia' },
  { id: 3, name: 'Kue Putu', price: 6000, stock: 13, img: 'https://placehold.co/200x150/b4e1d1/333?text=Kue+Putu' },
  { id: 4, name: 'Kue Lapis', price: 7000, stock: 18, img: 'https://placehold.co/200x150/f5c2e7/333?text=Kue+Lapis' },
  { id: 5, name: 'Dadar Gulung', price: 4000, stock: 25, img: 'https://placehold.co/200x150/a6e3a1/333?text=Dadar+Gulung' },
  { id: 6, name: 'Klepon', price: 3000, stock: 35, img: 'https://placehold.co/200x150/b4e1d1/333?text=Klepon' },
];

// Komponen untuk Top Bar (sama seperti dashboard)
const TopBar = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-sm rounded-lg mb-6">
    <div className="relative w-1/2 max-w-md">
      <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
    <div className="flex items-center gap-4">
      <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white"><User className="h-6 w-6" /></div>
        <div className="text-right">
          <div className="font-semibold text-gray-800">Agung Firmeki</div>
          <div className="text-sm text-gray-500">Admin</div>
        </div>
      </div>
    </div>
  </header>
);

// Komponen untuk Kartu Produk
const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer" onClick={() => onAddToCart(product)}>
    <img src={product.img} alt={product.name} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-blue-600 font-bold">Rp. {product.price.toLocaleString('id-ID')}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
    </div>
  </div>
);

// Komponen untuk Item di Keranjang
const CartItem = ({ item, onUpdateQty }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
      <div>
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <p className="text-sm text-gray-500">Rp. {item.price.toLocaleString('id-ID')}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button onClick={() => onUpdateQty(item.id, -1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
        <Minus className="h-4 w-4 text-gray-700" />
      </button>
      <span className="w-8 text-center font-medium">{item.quantity}</span>
      <button onClick={() => onUpdateQty(item.id, 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
        <Plus className="h-4 w-4 text-gray-700" />
      </button>
      <p className="w-20 text-right font-semibold">Rp. {(item.price * item.quantity).toLocaleString('id-ID')}</p>
    </div>
  </div>
);

export default function TransactionPage() {
  const [cart, setCart] = useState([]);

  // Fungsi untuk menambah item ke keranjang
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Cek stok
        if (existingItem.quantity >= product.stock) return prevCart;
        // Update jumlah
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Tambah item baru
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Fungsi untuk update jumlah item di keranjang
  const handleUpdateQty = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + amount;
            // Hapus jika jumlah 0, dan jangan lebihi stok
            if (newQuantity <= 0) return null;
            if (newQuantity > item.stock) return item;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean); // Filter untuk menghapus item yang null (jumlah 0)
    });
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="w-full">
      <TopBar />
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Grid (Kiri) */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>
        </div>

        {/* Cart/Order (Kanan) */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-5 rounded-lg shadow-sm sticky top-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Items</h2>
            <div className="max-h-64 overflow-y-auto divide-y">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-10">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <CartItem key={item.id} item={item} onUpdateQty={handleUpdateQty} />
                ))
              )}
            </div>
            
            <hr className="my-4" />

            <div className="space-y-3">
              <div className="flex justify-between font-semibold">
                <span>Total Price:</span>
                <span>Rp. {totalPrice.toLocaleString('id-ID')}</span>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Payment Method:</h3>
                <div className="flex gap-2">
                  {/* Placeholder untuk ikon pembayaran */}
                  <div className="p-2 border rounded-md border-blue-600 text-blue-600 font-bold text-sm">VISA</div>
                  <div className="p-2 border rounded-md text-gray-500 font-bold text-sm">Mastercard</div>
                  <div className="p-2 border rounded-md text-gray-500 font-bold text-sm">BCA</div>
                  <div className="p-2 border rounded-md text-gray-500 font-bold text-sm">QRIS</div>
                </div>
              </div>

              <button className="w-full py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                Order Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}