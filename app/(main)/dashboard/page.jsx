import {
  DollarSign,
  ClipboardList,
  Package,
  Calendar,
  Download,
} from "lucide-react";
import { fetchTransactionsForDashboard } from "@/lib/action";

const monthlySalesData = [
  { month: "Jan", height: "h-0" },
  { month: "Feb", height: "h-0" },
  { month: "Mar", height: "h-20" },
  { month: "Apr", height: "h-0" },
  { month: "May", height: "h-36" },
  { month: "Jun", height: "h-0" },
  { month: "Jul", height: "h-48" },
  { month: "Aug", height: "h-0" },
  { month: "Sep", height: "h-0" },
  { month: "Oct", height: "h-0" },
];

const StatCard = ({ title, value, percentage, icon, iconBg }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between">
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-[var(--black-custom)]">
        {value}
      </div>
      <div
        className={`text-xs mt-1 ${
          percentage > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentage > 0 ? `▲ ${percentage}%` : `▼ ${percentage}%`}
      </div>
    </div>
    <div className={`p-3 rounded-full ${iconBg}`}>{icon}</div>
  </div>
);

const MonthlySalesChart = () => (
  <div className="bg-white p-5 rounded-xl shadow-sm h-full">
    <h3 className="text-lg font-semibold text-[var(--black-custom)] mb-1">
      Monthly Sales
    </h3>
    <div className="flex items-end justify-between h-64 mt-4 px-2">
      {monthlySalesData.map((d) => (
        <div key={d.month} className="flex flex-col items-center gap-2 w-8">
          <div
            className={`w-full bg-[var(--primary-custom)]/20 rounded-t-lg ${d.height} transition-all`}
          ></div>
          <span className="text-xs text-gray-500">{d.month}</span>
        </div>
      ))}
    </div>
  </div>
);

const SalesSourceChart = () => (
  <div className="bg-white p-5 rounded-xl shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <div>
        <h3 className="text-lg font-semibold text-[var(--black-custom)]">
          Origin of sales transactions
        </h3>
        <span className="text-xs text-gray-500">12 Jun - 21 Sep 2025</span>
      </div>
      <span className="text-sm font-semibold text-red-500">▼ 1.2%</span>
    </div>
    <div className="text-3xl font-bold text-[var(--black-custom)] mb-4">
      Rp. 3.210.000
    </div>
    <div className="flex items-center gap-6">
      <div className="relative w-36 h-36">
        <div
          className="absolute inset-0 rounded-full bg-yellow-400"
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full bg-[var(--blue-custom)]"
          style={{ clipPath: "polygon(0% 100%, 50% 100%, 50% 50%, 0% 50%)" }}
        ></div>
        <div
          className="absolute inset-0 rounded-full bg-[var(--red-custom)]"
          style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)" }}
        ></div>
        <div className="absolute inset-2.5 rounded-full bg-white"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[var(--red-custom)]"></span>
            <span className="text-sm text-gray-500">Cash</span>
          </div>
          <span className="text-sm font-semibold text-[var(--black-custom)]">
            60%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[var(--blue-custom)]"></span>
            <span className="text-sm text-gray-500">Bank</span>
          </div>
          <span className="text-sm font-semibold text-[var(--black-custom)]">
            25%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="text-sm text-gray-500">E-Wallet</span>
          </div>
          <span className="text-sm font-semibold text-[var(--black-custom)]">
            15%
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default async function DashboardPage() {
  const orderHistory = await fetchTransactionsForDashboard();

  const formatRupiah = (number) => {
    if (isNaN(number)) return "Rp. 0";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const formatTanggal = (dateString) => {
    try {
      return new Date(dateString).toLocaleString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label
            htmlFor="start-date"
            className="block text-sm font-medium text-[var(--black-custom)] mb-1"
          >
            Start Date
          </label>
          <div className="relative">
            <input
              type="text"
              id="start-date"
              placeholder="mm/dd/yyyy"
              className="w-full p-2.5 border border-gray-200 rounded-lg bg-white pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <label
            htmlFor="end-date"
            className="block text-sm font-medium text-[var(--black-custom)] mb-1"
          >
            End Date
          </label>
          <div className="relative">
            <input
              type="text"
              id="end-date"
              placeholder="mm/dd/yyyy"
              className="w-full p-2.5 border border-gray-200 rounded-lg bg-white pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          title="Total Sale"
          value="Rp. 230.000"
          percentage={5.25}
          icon={<DollarSign className="h-6 w-6 text-yellow-500" />}
          iconBg="bg-yellow-100"
        />
        <StatCard
          title="Total Transaction"
          value="35"
          percentage={2.8}
          icon={
            <ClipboardList className="h-6 w-6 text-[var(--primary-custom)]" />
          }
          iconBg="bg-[var(--primary-custom)]/20"
        />
        <StatCard
          title="Total Items"
          value="88"
          percentage={100}
          icon={<Package className="h-6 w-6 text-[var(--blue-custom)]" />}
          iconBg="bg-[var(--blue-custom)]/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <MonthlySalesChart />
        </div>
        <div className="lg:col-span-1">
          <SalesSourceChart />
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[var(--black-custom)]">
            Order History
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-custom)] text-white rounded-lg hover:opacity-90">
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
            <tbody className="text-[var(--black-custom)]">
              {orderHistory.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    Belum ada riwayat transaksi.
                  </td>
                </tr>
              ) : (
                orderHistory.map((order) => (
                  <tr
                    key={`${order.id}-${order.name}`}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 font-medium">#{order.id}</td>
                    <td className="py-3 px-4">{order.name}</td>
                    <td className="py-3 px-4">{order.qty}</td>
                    <td className="py-3 px-4">{formatRupiah(order.amount)}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.sales.toUpperCase() === "E-Wallet"
                            ? "bg-[var(--blue-custom)]/20 text-[var(--blue-custom)]"
                            : order.sales.toUpperCase() === "Cash"
                            ? "bg-[var(--primary-custom)]/20 text-[var(--primary-custom)]"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.sales}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">
                      {formatTanggal(order.date)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}