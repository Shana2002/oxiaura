export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black overflow-hidden">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-3">
          <a href="/admin" className="block hover:bg-gray-700 p-2 rounded">🏠 Home</a>
          <a href="/admin/users" className="block hover:bg-gray-700 p-2 rounded">👥 Users</a>
          <a href="/admin/products" className="block hover:bg-gray-700 p-2 rounded">📦 Products</a>
          <a href="/admin/plans" className="block hover:bg-gray-700 p-2 rounded">💎 Plans</a>
          <a href="/admin/careers" className="block hover:bg-gray-700 p-2 rounded">🧰 Careers</a>
          <a href="/admin/blogs" className="block hover:bg-gray-700 p-2 rounded">📰 Blogs</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
