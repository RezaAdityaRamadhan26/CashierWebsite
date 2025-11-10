// Saya menggunakan 'lucide-react' untuk ikon. 
// Pastikan untuk menginstalnya: npm install lucide-react
import { Search, Bell, User, Calendar, BarChart, PieChart, Download } from 'lucide-react';

// Data dummy untuk tabel
const orderHistory = [
  { id: '#138948348', name: 'Kue Ape', qty: 3, amount: 'Rp. 34.000', sales: 'E-Wallet', date: '05-09-2025 16:30' },
  { id: '#138948346', name: 'Klepon', qty: 3, amount: 'Rp. 28.000', sales: 'E-Wallet', date: '09-09-2025 16:00' },
  { id: '#138273357', name: 'Kue Putu', qty: 5, amount: 'Rp. 44.000', sales: 'Cash', date: '10-09-2025 10:10' },
  { id: '#138274518', name: 'Kue Lapis', qty: 7, amount: 'Rp. 50.000', sales: 'Bank', date: '11-09-2025 12:20' },
  { id: '#138274988', name: 'Kue Ape', qty: 5, amount: 'Rp. 63.000', sales: 'Cash', date: '11-09-2025 09:21' },
  { id: '#138249744', name: 'Kue Lumpia', qty: 8, amount: 'Rp. 45.000', sales: 'E-Wallet', date: '11-09-2025 12:30' },
  { id: '#138254837', name: 'Kue Putu', qty: 10, amount: 'Rp. 55.000', sales: 'E-Wallet', date: '01-10-2025 14:02' },
  { id: '#138275957', name: 'Dadar Gulung', qty: 8, amount: 'Rp. 22.000', sales: 'Cash', date: '05-10-2025 14:00' },
];

// Komponen untuk Top Bar
const TopBar = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-sm rounded-lg mb-6">
    {/* Search Bar */}
    <div className="relative w-1/2 max-w-md">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
    
    {/* User Profile & Notifications */}
    <div className="flex items-center gap-4">
      <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <User className="h-6 w-6" />
        </div>
        <div className="text-right">
          <div className="font-semibold text-gray-800">Agung Firmeki</div>
          <div className="text-sm text-gray-500">Admin</div>
        </div>
      </div>
    </div>
  </header>
);

// Komponen untuk Stat Card
const StatCard = ({ title, value, percentage, icon, iconBg }) => (
  <div className="bg-white p-5 rounded-lg shadow-sm flex items-center justify-between">
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      {percentage && (
        <div className={`text-xs ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? `▲ ${percentage}%` : `▼ ${percentage}%`}
        </div>
      )}
    </div>
    <div className={`p-3 rounded-full ${iconBg}`}>
      {icon}
    </div>
  </div>
);

// Komponen untuk Placeholder Chart
const ChartPlaceholder = ({ title }) => (
  <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
    <div className="text-gray-400">
      {title === "Monthly Sales" ? <BarChart className="h-16 w-16" /> : <PieChart className="h-16 w-16" />}
    </div>
    <div className="mt-4 text-lg font-semibold text-gray-600">{title}</div>
    <div className="text-sm text-gray-400">Chart data will be displayed here</div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="w-full">
      <TopBar />

      {/* Date Pickers */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <div className="relative">
            <input type="text" id="start-date" placeholder="mm/dd/yyyy" className="w-full p-2 border rounded-lg bg-white pl-10" />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <div className="relative">
            <input type="text" id="end-date" placeholder="mm/dd/yyyy" className="w-full p-2 border rounded-lg bg-white pl-10" />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Total Sale" 
          value="Rp. 230.000" 
          percentage={5.25} 
          icon={<BarChart className="h-6 w-6 text-yellow-600" />} 
          iconBg="bg-yellow-100"
        />
        <StatCard 
          title="Total Transaction" 
          value="35" 
          percentage={2.80} 
          icon={<BarChart className="h-6 w-6 text-green-600" />} 
          iconBg="bg-green-100"
        />
        <StatCard 
          title="Total Items" 
          value="88" 
          percentage={100} 
          icon={<BarChart className="h-6 w-6 text-blue-600" />} 
          iconBg="bg-blue-100"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Monthly Sales */}
        <div className="lg:col-span-2">
          <ChartPlaceholder title="Monthly Sales" />
        </div>

        {/* Sales Source */}
        <div className="lg:col-span-1">
          <ChartPlaceholder title="Sales Source" />
          {/* Legend */}
          <div className="bg-white p-5 rounded-lg shadow-sm mt-4">
             <h3 className="text-lg font-semibold mb-3">Origin of sales transactions</h3>
             <div className="text-3xl font-bold">Rp. 3.210.000</div>
             <div className="text-sm text-red-500 mb-4">▼ 1.2%</div>
             <div className="flex justify-around text-center">
                <div>
                  <div className="h-10 w-10 rounded-full bg-red-400 mx-auto flex items-center justify-center text-white font-bold">60%</div>
                  <div className="text-sm mt-1">Cash</div>
                </div>
                <div>
                  <div className="h-10 w-10 rounded-full bg-blue-500 mx-auto flex items-center justify-center text-white font-bold">25%</div>
                  <div className="text-sm mt-1">Bank</div>
                </div>
                <div>
                  <div className="h-10 w-10 rounded-full bg-yellow-400 mx-auto flex items-center justify-center text-white font-bold">15%</div>
                  <div className="text-sm mt-1">E-Wallet</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Order History Table */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Order History</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
            <Download className="h-4 w-4" />
            Export as PDF
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max text-left">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600 uppercase text-sm">
                <th className="py-3 px-4">ID Order</th>
                <th className="py-3 px-4">Items Name</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Sales</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {orderHistory.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{order.id}</td>
                  <td className="py-3 px-4">{order.name}</td>
                  <td className="py-3 px-4">{order.qty}</td>
                  <td className="py-3 px-4">{order.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.sales === 'E-Wallet' ? 'bg-blue-100 text-blue-700' : 
                      order.sales === 'Cash' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.sales}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}