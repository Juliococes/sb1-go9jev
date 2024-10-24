import React from 'react';
import { Search, Plus, Calendar, Users, CheckSquare } from 'lucide-react';

interface Proyecto {
  id: string;
  nombre: string;
  cliente: string;
  fechaInicio: string;
  fechaFin: string;
  estado: 'En Progreso' | 'Pendiente' | 'Completado';
  progreso: number;
  equipo: string[];
}

const proyectos: Proyecto[] = [
  {
    id: '1',
    nombre: 'E-commerce Boutique Moderna',
    cliente: 'Comercial JP',
    fechaInicio: '2024-02-01',
    fechaFin: '2024-04-30',
    estado: 'En Progreso',
    progreso: 65,
    equipo: ['Ana Silva', 'Pedro Martínez']
  },
  {
    id: '2',
    nombre: 'Sistema de Gestión Hotelera',
    cliente: 'Hotel Santiago',
    fechaInicio: '2024-03-15',
    fechaFin: '2024-06-15',
    estado: 'Pendiente',
    progreso: 25,
    equipo: ['Carlos López', 'María González']
  },
  {
    id: '3',
    nombre: 'App de Delivery Local',
    cliente: 'Distribuidora CR',
    fechaInicio: '2024-01-15',
    fechaFin: '2024-03-15',
    estado: 'Completado',
    progreso: 100,
    equipo: ['Juan Pérez', 'Laura Torres']
  }
];

export default function ProyectosInternos() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterEstado, setFilterEstado] = React.useState('todos');

  const proyectosFiltrados = proyectos.filter(proyecto => {
    const matchSearch = proyecto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       proyecto.cliente.toLowerCase().includes(searchTerm.toLowerCase());
    const matchEstado = filterEstado === 'todos' || proyecto.estado.toLowerCase().replace(' ', '-') === filterEstado;
    return matchSearch && matchEstado;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de Proyectos</h1>
        <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Proyecto
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="border rounded-lg px-4 py-2"
          value={filterEstado}
          onChange={(e) => setFilterEstado(e.target.value)}
        >
          <option value="todos">Todos los estados</option>
          <option value="en-progreso">En Progreso</option>
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosFiltrados.map((proyecto) => (
          <div key={proyecto.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{proyecto.nombre}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${proyecto.estado === 'En Progreso' ? 'bg-blue-100 text-blue-800' :
                  proyecto.estado === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'}`}>
                {proyecto.estado}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{proyecto.cliente}</p>

            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  {new Date(proyecto.fechaInicio).toLocaleDateString()} - 
                  {new Date(proyecto.fechaFin).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                <span>{proyecto.equipo.join(', ')}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progreso</span>
                  <span className="font-medium">{proyecto.progreso}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${proyecto.progreso}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  Ver Detalles
                </button>
                <button className="flex items-center text-gray-600 hover:text-gray-700 text-sm">
                  <CheckSquare className="h-4 w-4 mr-1" />
                  Tareas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}