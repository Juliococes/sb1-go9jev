import React from 'react';
import { Users, FileText, FolderKanban, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AreaInterna() {
  const modules = [
    {
      title: 'Gestión de Clientes',
      description: 'Administra la información y seguimiento de clientes',
      icon: Users,
      link: '/interno/clientes',
      color: 'bg-blue-500'
    },
    {
      title: 'Formularios',
      description: 'Accede a todos los formularios de captura de información',
      icon: FileText,
      link: '/interno/formularios',
      color: 'bg-green-500'
    },
    {
      title: 'Proyectos',
      description: 'Gestiona y da seguimiento a los proyectos activos',
      icon: FolderKanban,
      link: '/interno/proyectos',
      color: 'bg-purple-500'
    },
    {
      title: 'Dashboard',
      description: 'Visualiza métricas y estadísticas importantes',
      icon: BarChart3,
      link: '/interno/dashboard',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Área Interna</h1>
        <p className="text-gray-600">
          Bienvenido al panel de administración de Coces Desarrollo Integral
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link
              key={module.title}
              to={module.link}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${module.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-indigo-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Accesos Rápidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-left">
            Nuevo Cliente
          </button>
          <button className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-left">
            Nuevo Proyecto
          </button>
          <button className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-left">
            Generar Reporte
          </button>
        </div>
      </div>
    </div>
  );
}