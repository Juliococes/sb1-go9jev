import React from 'react';
import { ExternalLink } from 'lucide-react';

const proyectos = [
  {
    id: '1',
    titulo: 'E-commerce Boutique Moderna',
    descripcion: 'Tienda en línea para una boutique local con sistema de inventario y pagos integrados.',
    imagen: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    url: '#'
  },
  {
    id: '2',
    titulo: 'Sistema de Gestión Hotelera',
    descripcion: 'Plataforma integral para la gestión de reservas y administración hotelera.',
    imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tecnologias: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    url: '#'
  },
  {
    id: '3',
    titulo: 'App de Delivery Local',
    descripcion: 'Aplicación móvil para servicio de entrega de restaurantes locales.',
    imagen: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tecnologias: ['React Native', 'Firebase', 'Google Maps API'],
    url: '#'
  }
];

export default function Proyectos() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Nuestros Proyectos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre cómo hemos ayudado a empresas locales a transformar sus negocios digitalmente
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
              <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proyecto.url}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Ver proyecto <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gray-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Conversemos sobre cómo podemos ayudarte a hacerlo realidad
        </p>
        <a
          href="/contacto"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
        >
          Contactar
        </a>
      </section>
    </div>
  );
}