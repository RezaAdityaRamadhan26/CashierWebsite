"use client"; 

import { FaUserCircle } from 'react-icons/fa'; 

{/* Badge Sidebar */}
const StatusBadge = ({ text, type }) => {
  let classes = "px-3 py-1 rounded-full text-xs font-medium font-[var(--font-poppins)]";
  if (type === 'success') {
    classes += " bg-green-100 text-green-700"; 
  } else if (type === 'active') {
    classes += " bg-blue-100 text-blue-700"; 
  } else {
    classes += " bg-gray-100 text-gray-700"; 
  }
  return <span className={classes}>{text}</span>;
};

{/* Input Form */}
const InfoInput = ({ label, value, type = "text" }) => (
  <div className="font-[var(--font-poppins)]">
    <label className="block text-sm font-medium text-gray-600 mb-1 font-[var(--font-poppins)]">
      {label}
    </label>
    <div className="flex gap-2">
      <input
        type={type}
        value={value}
        readOnly
        className="flex-1 p-2.5 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none font-[var(--font-poppins)]"
      />
      <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors font-[var(--font-poppins)]">
        Edit
      </button>
    </div>
  </div>
);

{/* Table Data */}
const subscriptionData = [
  { id: 1, paket: "Paket 6 Bulan", biaya: "Rp. 600.000", mulai: "1/Januari/2025", akhir: "1/Juni/2025", bayar: "Sudah Dibayar", status: "Aktif" },
  { id: 2, paket: "Paket 6 Bulan", biaya: "Rp. 600.000", mulai: "1/Juni/2025", akhir: "1/Desember/2025", bayar: "Sudah Dibayar", status: "Nonaktif" },
  { id: 3, paket: "Paket 6 Bulan", biaya: "Rp. 600.000", mulai: "1/Desember/2024", akhir: "1/Juni/2025", bayar: "Sudah Dibayar", status: "Nonaktif" },
  { id: 4, paket: "Trial 3 Bulan", biaya: "Gratis", mulai: "1/Maret/2025", akhir: "1/Juni/2025", bayar: "Sudah Dibayar", status: "Nonaktif" },
];


export default function ProfilePage() {
  return (
    <div className="space-y-8 font-[var(--font-poppins)]">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md font-[var(--font-poppins)]">
        <h1 className="text-  xl sm:text-3xl font-bold text-gray-800 mb-8 font-[var(--font-poppins)]">
          Profile
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Bagian Kiri: Foto Profil */}
          <div className="flex flex-1 flex-col justify-center items-center md:items-center font-[var(--font-poppins)]">
            <FaUserCircle size={200} className="text-[var(--gray-custom)]" />
            <button className="mt-4 px-4 py-2 bg-[var(--primary-custom)] text-[var(--light-custom)] rounded-lg text-sm font-medium hover:bg-[var(--blue-custom)] transition-colors font-[var(--font-poppins)]">
              Change Profile Photo
            </button>
          </div>
          {/* Bagian Kanan: Informasi Akun */}
          <div className="flex-grow font-[var(--font-poppins)]">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 font-[var(--font-poppins)]">
              Account Information
            </h2>
            <div className="space-y-5 font-[var(--font-poppins)]">
              <InfoInput label="Username" value="eki sukahor" />
              <InfoInput label="Email" value="devifinoyanti@gmail.com" />
              <InfoInput label="Password" value="************" type="password" />
            </div>
          </div>
        </div>
      </div>
      {/* Table Subscription History */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md font-[var(--font-poppins)]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 font-[var(--font-poppins)]">
          Subscription History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 font-[var(--font-poppins)]">
            <thead className="bg-gray-100 font-[var(--font-poppins)]">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-gray-600 font-[var(--font-poppins)]">Paket Langganan</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600 font-[var(--font-poppins)]">Biaya</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600 font-[var(--font-poppins)]">Tanggal Mulai</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600 font-[var(--font-poppins)]">Tanggal Akhir</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600 font-[var(--font-poppins)]">Status Pembayaran</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600 font-[var(--font-poppins)]">Status Membership</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 font-[var(--font-poppins)]">
              {subscriptionData.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-700 font-[var(--font-poppins)]">{item.paket}</td>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-700 font-[var(--font-poppins)]">{item.biaya}</td>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-700 font-[var(--font-poppins)]">{item.mulai}</td>
                  <td className="p-4 whitespace-nowrap text-sm text-gray-700 font-[var(--font-poppins)]">{item.akhir}</td>
                  <td className="p-4 whitespace-nowrap font-[var(--font-poppins)]">
                    <StatusBadge text={item.bayar} type="success" />
                  </td>
                  <td className="p-4 whitespace-nowrap font-[var(--font-poppins)]">
                    <StatusBadge
                      text={item.status}
                      type={item.status === 'Aktif' ? 'active' : 'default'}
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