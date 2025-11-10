import Sidebar from './Sidebar'; 

export default function ProfileLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">     
     <Sidebar />
      
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}