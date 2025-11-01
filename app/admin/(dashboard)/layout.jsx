"use client";

import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/admin/login"); // Redirect after logout
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-black overflow-hidden">
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav className="space-y-3">
            <a href="/admin" className="block hover:bg-gray-700 p-2 rounded">🏠 Home</a>
            <a href="/admin/users" className="block hover:bg-gray-700 p-2 rounded">👥 Users</a>
            <a href="/admin/products" className="block hover:bg-gray-700 p-2 rounded">📦 Products</a>
            <a href="/admin/team" className="block hover:bg-gray-700 p-2 rounded">💎 Team</a>
            <a href="/admin/careers" className="block hover:bg-gray-700 p-2 rounded">🧰 Careers</a>
            <a href="/admin/blogs" className="block hover:bg-gray-700 p-2 rounded">📰 Blogs</a>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-6"
        >
          🔒 Logout
        </button>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
