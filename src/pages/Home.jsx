// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Parte superior: dos columnas */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Columna izquierda: texto */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Bootstrap 5 theme</h1>
          <h1 className="text-4xl font-bold text-gray-800">crafted by ThemeWagon</h1>
          <p className="text-lg text-gray-600">
            ThemeWagon offers an wide array of category-oriented 
Free and Premium  Bootstrap HTML Templates and Themes. 
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Saber más
          </button>
        </div>

        {/* Columna derecha: imagen */}
        <div className="flex-1">
          <img src="/1.home/illustration1.png" alt="Imagen destacada" className="w-full max-w-md mx-auto" />
        </div>
      </div>

      {/* Fila inferior: logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
        <img src="/1.home/google.png" alt="Logo 1" className="h-12 object-contain" />
        <img src="/1.home/netflix.png" alt="Logo 2" className="h-12 object-contain" />
        <img src="/1.home/microsoft.png" alt="Logo 3" className="h-12 object-contain" />
        <img src="/1.home/mailbuster.png" alt="Logo 4" className="h-12 object-contain" />
        <img src="/1.home/themewagon.png" alt="Logo 5" className="h-12 object-contain" />
      </div>
    </div>
  )
}
