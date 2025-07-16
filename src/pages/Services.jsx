// src/pages/Services.jsx
export default function Services() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      {/* Título y párrafo */}
      <div className="mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800">Service</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Card 1 con fondo luna */}
        <div className="relative">
          {/* Imagen luna */}
          <img
            src="/2.services/illustration1.png"
            alt="Fondo decorativo"
            className="absolute -top-10 -left-10 w-40 z-0 select-none pointer-events-none"
          />

          {/* Card encima */}
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl  p-6 shadow-md hover:shadow-xl transition">
            <img
              src="/2.services/icon1.png"
              alt="Servicio 1"
              className="w-full h-48 object-contain rounded mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">Send Text Instantly</h2>
            <p className="text-gray-600 mt-2">
              Financial planning, forecasting and adjusting rapidly with customer demands and budgets.
            </p>
            <button className="mt-4 text-blue-600 flex items-center gap-2 hover:underline">
              Learn More <span>→</span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/50 rounded-3xl p-6 shadow-md hover:shadow-xl transition">
          <img
            src="/2.services/icon2.png"
            alt="Servicio 2"
            className="w-full h-48 object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Better Organized</h2>
          <p className="text-gray-600 mt-2">
            Latest technology and experienced guidance, trained HR specialists 
to keep updated.
          </p>
          <button className="mt-4 text-blue-600 flex items-center gap-2 hover:underline">
            Learn More <span>→</span>
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl  p-6 shadow-md hover:shadow-xl transition">
          <img
            src="/2.services/icon3.png"
            alt="Servicio 3"
            className="w-full h-48 object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Analytical Statistics</h2>
          <p className="text-gray-600 mt-2">
            Messages, real-time reminders, memos, and many more will 
keep your team in sync.


          </p>
          <button className="mt-4 text-blue-600 flex items-center gap-2 hover:underline">
            Learn More <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
