import { Plus } from 'lucide-react';
import Image from 'next/image';

// (DIUBAH) Path gambar sekarang menunjuk ke folder /public/images/
const products = [
  { id: 1, name: 'Kue Ape', price: 5000, stock: 16, img: '/images/kue-ape.jpg' },
  { id: 2, name: 'Kue Putu', price: 6000, stock: 13, img: '/images/kue-putu.jpg' },
  { id: 3, name: 'Klepon', price: 3000, stock: 35, img: '/images/klepon.jpg' },
  { id: 4, name: 'Lumpia', price: 8000, stock: 11, img: '/images/lumpia.jpg' },
  { id: 5, name: 'Kue Lapis', price: 7000, stock: 18, img: '/images/kue-lapis.jpg' },
  { id: 6, name: 'Dadar Gulung', price: 4000, stock: 25, img: '/images/dadar-gulung.jpg' },
];

// Komponen untuk Kartu Produk
const ItemCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
      <p className="text-[var(--primary-custom)] font-bold mt-1">Rp. {product.price.toLocaleString('id-ID')}</p>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 py-2 px-3 bg-[var(--primary-custom)] text-white text-sm rounded-md hover:opacity-90">
          Edit
        </button>
        <button className="flex-1 py-2 px-3 bg-[var(--red-custom)] text-white text-sm rounded-md hover:opacity-90">
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default function ItemsDataPage() {
  return (
    <div className="w-full">
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-custom)] text-white rounded-lg hover:opacity-90">
            <Plus className="h-5 w-5" />
            Add Items
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}