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
      <h2 className="text-3xl font-bold text-gray-800 mb-4">A creative team which builds stunning UI/UX</h2>
      <p className="text-gray-600 mb-6">
        Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience.
            The most stunning, cutting-edge UI/UX.
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon
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
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Devoted to defining the cutting edge</h2>
      <p className="text-gray-600 mb-6">
        "This new creation is cutting-edge technology," says the researcher, "whose study originates from a business
            at the forefront of space science."
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon
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

