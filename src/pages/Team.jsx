import React from 'react';

export default function Team() {
  // Datos del equipo (puedes expandir esto o traerlo de una API)
  const teamMembers = [
    {
      id: 1,
      name: 'John Adams',
      role: 'CEO',
      image: '/6.team/image1.png',
    },
    {
      id: 2,
      name: 'Carrey Johnson',
      role: 'Senior Developer',
      image: '/6.team/image2.png',
    },
    {
      id: 3,
      name: 'Ray Marie',
      role: 'Developer',
      image: '/6.team/image3.png',
    },
    {
      id: 4,
      name: 'Austin Min',
      role: 'Designer',
      image: '/6.team/image4.png',
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-7xl mx-auto">
      {/* Título Centrado */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
        Conoce a Nuestro Equipo
      </h1>

      {/* Párrafo Centrado */}
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-12 leading-relaxed">
        Somos un grupo apasionado de profesionales dedicados a transformar tus ideas en realidad. Cada miembro aporta experiencia y creatividad para asegurar el éxito de cada proyecto.
      </p>

      {/* Grid de Miembros del Equipo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className=" object-cover mb-4 " 
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-md text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}