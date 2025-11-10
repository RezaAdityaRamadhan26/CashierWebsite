// Saya menggunakan 'lucide-react' untuk ikon. 
// Pastikan untuk menginstalnya: npm install lucide-react
import { Search, Bell, User, Plus } from 'lucide-react';

// Data dummy untuk produk
const products = [
  { id: 1, name: 'Kue Ape', price: 5000, stock: 16, img: 'https://placehold.co/200x150/a6e3a1/333?text=Kue+Ape' },
  { id: 2, name: 'Kue Putu', price: 6000, stock: 13, img: 'https://placehold.co/200x150/b4e1d1/333?text=Kue+Putu' },
  { id: 3, name: 'Klepon', price: 3000, stock: 35, img: 'https://placehold.co/200x150/b4e1d1/333?text=Klepon' },
  { id: 4, name: 'Lumpia', price: 8000, stock: 11, img: 'https://placehold.co/200x150/f9e2af/333?text=Lumpia' },
  { id: 5, name: 'Kue Lapis', price: 7000, stock: 18, img: 'https://placehold.co/200x150/f5c2e7/333?text=Kue+Lapis' },
  { id: 6, name: 'Dadar Gulung', price: 4000, stock: 25, img: 'https://placehold.co/200x150/a6e3a1/333?text=Dadar+Gulung' },
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
const ItemCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <img src={product.img} alt={product.name} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
      <p className="text-blue-600 font-bold mt-1">Rp. {product.price.toLocaleString('id-ID')}</p>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 py-2 px-3 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
          Edit
        </button>
        <button className="flex-1 py-2 px-3 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  </div>
);


export default function ItemsDataPage() {
  return (
    <div className="w-full">
      <TopBar />
      
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
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