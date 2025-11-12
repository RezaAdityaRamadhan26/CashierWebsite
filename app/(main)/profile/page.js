// app/(main)/profile/page.js
"use client";
import Image from 'next/image';

// Data dummy untuk tabel
const subscriptionHistory = [
  { id: 1, plan: 'Paket 6 Bulan', price: 'Rp. 600.000', start: '1/Januari/2025', end: '1/Juni/2025', payment: 'Sudah Dibayar', status: 'Aktif' },
  { id: 2, plan: 'Paket 6 Bulan', price: 'Rp. 600.000', start: '1/Januari/2025', end: '1/Juni/2025', payment: 'Sudah Dibayar', status: 'Nonaktif' },
  { id: 3, plan: 'Paket 6 Bulan', price: 'Rp. 600.000', start: '1/Januari/2025', end: '1/Juni/2025', payment: 'Sudah Dibayar', status: 'Nonaktif' },
  { id: 4, plan: 'Paket 6 Bulan', price: 'Rp. 600.000', start: '1/Januari/2025', end: '1/Juni/2025', payment: 'Sudah Dibayar', status: 'Nonaktif' },
  { id: 5, plan: 'Paket Trial 3 Bulan', price: 'Gratis', start: '1/Januari/2025', end: '1/Maret/2025', payment: 'Sudah Dibayar', status: 'Nonaktif' },
];

// Komponen untuk input read-only
const InfoInput = ({ label, value, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-[var(--black-custom)] mb-1">{label}</label>
    <div className="flex items-center gap-3">
      <input 
        type={type}
        value={value}
        readOnly
        className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-100/50 pl-4" 
      />
      <button className="px-5 py-2.5 bg-[var(--primary-custom)] text-white text-sm font-medium rounded-lg hover:opacity-90">
        Edit
      </button>
    </div>
  </div>
);

// Komponen untuk status badge
const StatusBadge = ({ text, type }) => {
  const baseStyle = "px-3 py-1 rounded-full text-xs font-medium";
  const styles = {
    paid: "bg-green-100 text-green-700", // "Sudah Dibayar"
    active: "bg-blue-100 text-blue-700", // "Aktif"
    inactive: "bg-gray-100 text-gray-600" // "Nonaktif"
  };
  return (
    <span className={`${baseStyle} ${styles[type] || styles.inactive}`}>
      {text}
    </span>
  );
};


export default function ProfilePage() {
  return (
    <div className="w-full space-y-6">
      
      {/* Kartu Profil */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-[var(--black-custom)] mb-6">
          Profile
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Kiri: Info Akun */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/images/profile.png" // Pastikan path ini benar
                alt="User Avatar" 
                width={80} 
                height={80} 
                className="rounded-full object-cover"
              />
              <button className="px-4 py-2 bg-[var(--primary-custom)] text-white text-sm rounded-lg hover:opacity-90">
                Change Profile Photo
              </button>
            </div>

            <h3 className="text-lg font-semibold text-[var(--black-custom)] pt-4">
              Account Information
            </h3>
            <form className="space-y-4">
              <InfoInput label="Username" value="eki sukohar" />
              <InfoInput label="Email" value="devifinoyanti@gmail.com" />
              <InfoInput label="Password" value="************" type="password" />
            </form>
          </div>
          
          {/* Kanan: Ilustrasi (Opsional) */}
          <div className="flex-1 items-center justify-center hidden lg:flex">
            <Image src="/images/image-profile.png" alt="Illustration" width={200} height={100} className="rounded-lg object-cover" />
          </div>
        </div>
      </div>

      {/* Kartu Subscription History */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-[var(--black-custom)] mb-6">
          Subscription History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max text-left">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600 uppercase text-sm">
                <th className="py-3 px-4">Paket Langganan</th>
                <th className="py-3 px-4">Biaya</th>
                <th className="py-3 px-4">Tanggal Mulai</th>
                <th className="py-3 px-4">Tanggal Akhir</th>
                <th className="py-3 px-4">Status Pembayaran</th>
                <th className="py-3 px-4">Status Membership</th>
              </tr>
            </thead>
            <tbody className="text-[var(--black-custom)]">
              {subscriptionHistory.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{item.plan}</td>
                  <td className="py-3 px-4">{item.price}</td>
                  <td className="py-3 px-4">{item.start}</td>
                  <td className="py-3 px-4">{item.end}</td>
                  <td className="py-3 px-4">
                    <StatusBadge text={item.payment} type="paid" />
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge 
                      text={item.status} 
                      type={item.status === 'Aktif' ? 'active' : 'inactive'} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}