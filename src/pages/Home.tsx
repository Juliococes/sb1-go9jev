import React from 'react';
import { Code2, HeadphonesMic, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transformamos Ideas en Realidad Digital
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Soluciones digitales integrales para pequeñas y medianas empresas en Rancagua
        </p>
        <a
          href="/contacto"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Comienza tu Proyecto
        </a>
      </section>

      {/* Servicios Principales */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Code2 className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-600">
              Sitios web modernos y aplicaciones personalizadas que impulsan tu negocio
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <HeadphonesMic className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact Center</h3>
            <p className="text-gray-600">
              Servicios de atención al cliente profesionales y eficientes
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Consultoría</h3>
            <p className="text-gray-600">
              Mejora continua y optimización de procesos empresariales
            </p>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="bg-gray-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Experiencia Local</h3>
            <p className="text-gray-600">Conocemos el mercado de Rancagua y sus necesidades</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Soluciones Integrales</h3>
            <p className="text-gray-600">Cubrimos todas tus necesidades digitales</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Atención Personalizada</h3>
            <p className="text-gray-600">Cada proyecto recibe atención dedicada</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              4
            </div>
            <h3 className="font-semibold mb-2">Tecnología Moderna</h3>
            <p className="text-gray-600">Utilizamos las últimas tecnologías del mercado</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales
        </p>
        <a
          href="/contacto"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
        >
          Agenda una Consulta Gratuita
        </a>
      </section>
    </div>
  );
}