export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MiTienda — Todos los derechos reservados.
        </p>
      </footer>
    );
  }
  