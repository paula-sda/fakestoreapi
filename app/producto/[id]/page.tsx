import Image from "next/image";
import { getProductoById } from "@/app/utils/getProductoById";

export default async function ProductoPage({ params }: { params: { id: string } }) {
    const { id } = await params;
  const producto = await getProductoById(id);

  if (!producto) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-600">Producto no encontrado</h1>
        <p className="text-gray-600 mt-2">Parece que este producto no existe o no se pudo cargar.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-1/2 h-80">
        <Image
          src={producto.image || "/placeholder.png"}
          alt={producto.title}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{producto.title}</h1>
        <p className="text-gray-600 mb-6">{producto.description}</p>
        <p className="text-2xl font-semibold text-blue-600">{producto.price} €</p>
      </div>
    </div>
  );
}
