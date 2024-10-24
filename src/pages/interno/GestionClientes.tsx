import React from 'react';
import { Search, Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';

interface Cliente {
  id: string;
  nombre: string;
  empresa: string;
  rubro: string;
  telefono: string;
  estado: 'Activo' | 'Potencial' | 'Inactivo';
  ultimoContacto: string;
}

const clientes: Cliente[] = [
  {
    id: '1',
    nombre: 'Juan Pérez',
    empresa: 'Comercial JP',
    rubro: 'Retail',
    telefono: '+56 9 1234 5678',
    estado: 'Activo',
    ultimoContacto: '2024-03-15'
  },
  {
    id: '2',
    nombre: 'María González',
    empresa: 'Consultora MG',
    rubro: 'Servicios',
    telefono: '+56 9 8765 4321',
    estado: 'Potencial',
    ultimoContacto: '2024-03-14'
  },
  {
    id: '3',
    nombre: 'Carlos Rodríguez',
    empresa: 'Distribuidora CR',
    rubro: 'Logística',
    telefono: '+56 9 2468 1357',
    estado: 'Inactivo',
    ultimoContacto: '2024-03-10'
  }
];

export default function GestionClientes() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterEstado, setFilterEstado] = React.useState('todos');

  const clientesFiltrados = clientes.filter(cliente => {
    const matchSearch = cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       cliente.empresa.toLowerCase().includes(searchTerm.toLowerCase());
    const matchEstado = filterEstado === 'todos' || cliente.estado.toLowerCase() === filterEstado.toLowerCase();
    return matchSearch && matchEstado;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de Clientes</h1>
        <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Cliente
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar clientes..."
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
          <option value="activo">Activos</option>
          <option value="potencial">Potenciales</option>
          <option value="inactivo">Inactivos</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente/Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rubro
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teléfono
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Último Contacto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium">{cliente.nombre}</span>
                      <span className="text-sm text-gray-500">{cliente.empresa}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{cliente.rubro}</td>
                  <td className="px-6 py-4">{cliente.telefono}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${cliente.estado === 'Activo' ? 'bg-green-100 text-green-800' :
                        cliente.estado === 'Potencial' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'}`}>
                      {cliente.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {new Date(cliente.ultimoContacto).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-3">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}