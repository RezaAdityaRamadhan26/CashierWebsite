// app/(main)/transaction/page.js
"use client";
import { useState } from 'react';
import { Plus, Minus, CreditCard } from 'lucide-react';
import Image from 'next/image';

// (DIUBAH) Path gambar sekarang menunjuk ke folder /public/images/
const products = [
  { id: 1, name: 'Kue Ape', price: 5000, stock: 16, img: '/images/kue-ape.jpg' },
  { id: 2, name: 'Lumpia', price: 8000, stock: 11, img: '/images/lumpia.jpg' },
  { id: 3, name: 'Kue Putu', price: 6000, stock: 13, img: '/images/kue-putu.jpg' },
  { id: 4, name: 'Kue Lapis', price: 7000, stock: 18, img: '/images/kue-lapis.jpg' },
  { id: 5, name: 'Dadar Gulung', price: 4000, stock: 25, img: '/images/dadar-gulung.jpg' },
  { id: 6, name: 'Klepon', price: 3000, stock: 35, img: '/images/klepon.jpg' },
];

// Komponen Kartu Produk
const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer" onClick={() => onAddToCart(product)}>
    <Image 
      src={product.img} 
      alt={product.name} 
      width={200} 
      height={150} 
      className="w-full h-32 object-cover" 
      // 'unoptimized' Dihapus
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-[var(--black-custom)]">{product.name}</h3>
      <p className="text-[var(--primary-custom)] font-bold">Rp. {product.price.toLocaleString('id-ID')}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
    </div>
  </div>
);

// Komponen Item di Keranjang
const CartItem = ({ item, onUpdateQty }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <Image 
        src={item.img} 
        alt={item.name} 
        width={56} 
        height={56} 
        className="w-14 h-14 rounded-lg object-cover" 
        // 'unoptimized' Dihapus
      />
      <div>
        <h4 className="font-semibold text-[var(--black-custom)]">{item.name}</h4>
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
      <p className="w-24 text-right font-semibold text-[var(--black-custom)]">
        Rp. {(item.price * item.quantity).toLocaleString('id-ID')}
      </p>
    </div>
  </div>
);

// Komponen Ikon Pembayaran
const PaymentIcon = ({ icon, name, isActive }) => (
  <div className={`flex-1 p-2 border rounded-md cursor-pointer ${
      isActive ? 'border-[var(--primary-custom)] bg-[var(--primary-custom)]/10' : 'border-gray-200'
  }`}>
    {icon ? icon : <CreditCard className={`h-6 w-6 mx-auto ${isActive ? 'text-[var(--primary-custom)]' : 'text-gray-400'}`} />}
  </div>
);

export default function TransactionPage() {
  // (DIUBAH) Path gambar di state awal juga diganti
  const [cart, setCart] = useState([
    { id: 3, name: 'Kue Putu', price: 6000, stock: 13, img: '/images/kue-putu.jpg', quantity: 2 },
    { id: 6, name: 'Klepon', price: 3000, stock: 35, img: '/images/klepon.jpg', quantity: 1 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState('visa');

  // Fungsi handleAddToCart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) return prevCart;
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Fungsi handleUpdateQty
  const handleUpdateQty = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + amount;
            if (newQuantity <= 0) return null;
            if (newQuantity > item.stock) return item;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Product Grid (Kiri) */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </div>

      {/* Cart/Order (Kanan) */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white p-5 rounded-xl shadow-sm sticky top-6">
          <h2 className="text-xl font-semibold text-[var(--black-custom)] mb-4">Items</h2>
          <div className="max-h-80 overflow-y-auto divide-y divide-gray-200 pr-2">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-10">Cart is empty</p>
            ) : (
              cart.map((item) => (
                <CartItem key={item.id} item={item} onUpdateQty={handleUpdateQty} />
              ))
            )}
          </div>
          <hr className="my-4 border-gray-200" />
          <div className="space-y-4">
            <div className="flex justify-between font-semibold text-lg">
              <span className="text-[var(--black-custom)]">Total Price:</span>
              <span className="text-[var(--primary-custom)]">Rp. {totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[var(--black-custom)]">Payment Method:</h3>
              <div className="flex gap-2">
                <div onClick={() => setPaymentMethod('visa')}><PaymentIcon name="Visa" isActive={paymentMethod === 'visa'} /></div>
                <div onClick={() => setPaymentMethod('mastercard')}><PaymentIcon name="Mastercard" isActive={paymentMethod === 'mastercard'} /></div>
                <div onClick={() => setPaymentMethod('bca')}><PaymentIcon name="BCA" isActive={paymentMethod === 'bca'} /></div>
                <div onClick={() => setPaymentMethod('qris')}><PaymentIcon name="QRIS" isActive={paymentMethod === 'qris'} /></div>
              </div>
            </div>
            <button className="w-full py-3 bg-[var(--primary-custom)] text-white rounded-lg font-semibold hover:opacity-90 transition-colors">
              Order Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}