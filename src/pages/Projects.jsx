import React from 'react';

export default function Projects() {
  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-7xl mx-auto">
      {/* Título Centrado */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
        Nuestros Proyectos Destacados
      </h1>

      {/* Párrafo Centrado */}
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-12 leading-relaxed">
        Explora una selección de nuestros trabajos más recientes. Desde diseño web innovador hasta soluciones de desarrollo robustas, cada proyecto refleja nuestra dedicación a la excelencia y la satisfacción del cliente.
      </p>

      {/* Grid de Imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Fila 1 */}
        {/* Imagen 1 (Pequeña) */}
        <div className="relative overflow-hidden rounded-lg ">
          <img
            src="/5.projects/image1.png"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Imagen 2 (Grande) */}
        <div className="relative overflow-hidden rounded-lg ">
          <img
            src="/5.projects/image2.png"
            alt="Project 2"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>

        {/* Imagen 3 (Pequeña) */}
        <div className="relative overflow-hidden rounded-lg ">
          <img
            src="/5.projects/image3.png"
            alt="Project 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Fila 2 */}
        {/* Imagen 4 (Grande) */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/5.projects/image4.png"
            alt="Project 4"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>

        {/* Imagen 5 (Pequeña) */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/5.projects/image5.png"
            alt="Project 5"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Imagen 6 (Grande) */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/5.projects/image6.png"
            alt="Project 6"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}



{/* <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/5.projects/image6.png"
            alt="Project 6"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-bold">Estrategia Zeta</span>
          </div>
        </div> */}

          /* este fue un codigo que al añadirlo a la card como que se da la vuelta y se pone negro y muestra un texto al acercar el mouse */