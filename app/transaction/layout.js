import Sidebar from './Sidebar'; 

// Mengganti nama fungsi agar unik
export default function TransactionLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}