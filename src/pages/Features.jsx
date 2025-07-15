// src/pages/Features.jsx
export default function Features() {
  const features = [
    {
      img: '/4.features/icon1.png',
      title: 'Velocidad',
      desc: 'Procesos optimizados para rendimiento superior.',
    },
    {
      img: '/4.features/icon2.png',
      title: 'Seguridad',
      desc: 'Protección de datos con estándares modernos.',
    },
    {
      img: '/4.features/icon3.png',
      title: 'Escalabilidad',
      desc: 'Preparado para crecer contigo sin límites.',
    },
    {
      img: '/4.features/icon4.png',
      title: 'Soporte',
      desc: 'Atención técnica 24/7 a tu disposición.',
    },
    {
      img: '/4.features/icon5.png',
      title: 'Integraciones',
      desc: 'Conectividad con tus herramientas favoritas.',
    },
    {
      img: '/4.features/icon6.png',
      title: 'Personalización',
      desc: 'Diseñado a tu medida, flexible y dinámico.',
    },
  ]

  return (
    <section className="py-16 bg-white text-center">
      {/* Título y descripción */}
      <div className="mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800">Features</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Descubre todo lo que nuestra plataforma puede ofrecerte para llevar tu proyecto al siguiente nivel.
        </p>
      </div>

      {/* Grid de características */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((f, index) => (
          <div key={index} className="p-6 rounded-2xl transition ">
            <img
              src={f.img}
              alt={f.title}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-800">{f.title}</h2>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
