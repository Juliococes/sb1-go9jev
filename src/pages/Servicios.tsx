import React from 'react';
import { Code2, HeadphonesMic, TrendingUp, CheckCircle } from 'lucide-react';

export default function Servicios() {
  return (
    <div className="space-y-16">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-6">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ofrecemos soluciones digitales completas para impulsar tu negocio en la era digital
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Desarrollo Web */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Code2 className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Desarrollo Web</h2>
          <p className="text-gray-600 mb-6">
            Creamos sitios web y aplicaciones personalizadas que destacan tu marca y mejoran tu presencia digital.
          </p>
          <ul className="space-y-3">
            {[
              'Sitios web responsivos',
              'Tiendas en línea',
              'Aplicaciones web personalizadas',
              'Optimización SEO',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Center */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <HeadphonesMic className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Contact Center</h2>
          <p className="text-gray-600 mb-6">
            Servicios profesionales de atención al cliente que mejoran la satisfacción y retención.
          </p>
          <ul className="space-y-3">
            {[
              'Atención al cliente 24/7',
              'Gestión de reclamos',
              'Soporte técnico',
              'Seguimiento de casos',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Consultoría */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Consultoría de Mejora Continua</h2>
          <p className="text-gray-600 mb-6">
            Optimizamos tus procesos empresariales para maximizar la eficiencia y productividad.
          </p>
          <ul className="space-y-3">
            {[
              'Análisis de procesos',
              'Implementación de mejoras',
              'Capacitación de personal',
              'Medición de resultados',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Paquetes Personalizados */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">+</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Soluciones Personalizadas</h2>
          <p className="text-gray-600 mb-6">
            Creamos paquetes adaptados a las necesidades específicas de tu empresa.
          </p>
          <ul className="space-y-3">
            {[
              'Análisis de necesidades',
              'Propuestas a medida',
              'Integración de servicios',
              'Soporte continuo',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="bg-indigo-600 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Necesitas una solución personalizada?</h2>
        <p className="text-xl mb-8">
          Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos
        </p>
        <a
          href="/contacto"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Solicitar Consulta
        </a>
      </section>
    </div>
  );
}