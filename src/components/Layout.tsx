import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Building2, Users, Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isInternal = location.pathname.startsWith('/interno');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">Coces Desarrollo</span>
            </Link>
            
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
              >
                Servicios
              </Link>
              <Link
                to="/proyectos"
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
              >
                Proyectos
              </Link>
              <Link
                to="/interno"
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center"
              >
                <Users className="h-4 w-4 mr-1" />
                Área Interna
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white block px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="text-white block px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Servicios
              </Link>
              <Link
                to="/proyectos"
                className="text-white block px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Proyectos
              </Link>
              <Link
                to="/interno"
                className="text-white block px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Área Interna
              </Link>
            </div>
          </div>
        )}
      </nav>

      {isInternal && (
        <div className="bg-gray-100 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 py-4">
              <Link
                to="/interno/clientes"
                className="text-gray-600 hover:text-gray-900"
              >
                Gestión de Clientes
              </Link>
              <Link
                to="/interno/formularios"
                className="text-gray-600 hover:text-gray-900"
              >
                Formularios
              </Link>
              <Link
                to="/interno/proyectos"
                className="text-gray-600 hover:text-gray-900"
              >
                Proyectos
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Coces Desarrollo Integral</h3>
              <p className="text-gray-300">
                Soluciones digitales integrales para pequeñas y medianas empresas en Rancagua, Chile.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-300">Rancagua, Chile</p>
              <p className="text-gray-300">contacto@coces.cl</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Desarrollo Web</li>
                <li>Contact Center</li>
                <li>Consultoría de Mejora Continua</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © {new Date().getFullYear()} Coces Desarrollo Integral. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}