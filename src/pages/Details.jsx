// src/pages/Details.jsx
export default function Details() {
  return (
    <section className="py-10 bg-white px-4 space-y-12">
  {/* Fila 1 */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
    {/* Imagen izquierda */}
    <div className="flex justify-center">
      <img
        src="/3.details/illustration3.png"
        alt="Imagen"
        className="w-full max-w-[400px] object-cover rounded-xl"
      />
    </div>

    {/* Texto derecha */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Primera característica destacada</h2>
      <p className="text-gray-600 mb-6">
        Este texto explica la funcionalidad, valor o detalle importante de esta característica o servicio.
      </p>
      <button className="px-6 py-2 text-blue-400 border border-blue-400 rounded-md">
        Read more
      </button>
    </div>
  </div>

  {/* Fila 2 */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
    {/* Texto izquierda */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Segunda característica destacada</h2>
      <p className="text-gray-600 mb-6">
        Aquí se describe otra ventaja o propiedad del producto, mostrando su utilidad y beneficios.
      </p>
      <button className="px-6 py-2 text-blue-400 border border-blue-400 rounded-md">
        Read more
      </button>
    </div>

    {/* Imagen derecha */}
    <div className="flex justify-center">
      <img
        src="/3.details/illustration6.png"
        alt="Imagen"
        className="w-full max-w-[400px] object-cover rounded-xl"
      />
    </div>
  </div>
</section>


  )
}

