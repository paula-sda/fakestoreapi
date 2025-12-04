import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">🛍️ MiTienda</h1>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-gray-300 transition">Inicio</Link>
            <a href="#" className="hover:text-gray-300 transition">Contacto</a>
          </nav>
        </div>
      </header>
    );
  }
  