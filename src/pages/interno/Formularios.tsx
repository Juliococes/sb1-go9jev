import React from 'react';
import { useForm } from 'react-hook-form';
import { ClienteInicial, DetallesNegocio, RequerimientosSitio, Brief, Feedback } from '../../types';
import { FileText, Send } from 'lucide-react';

export default function Formularios() {
  const [formType, setFormType] = React.useState<string>('cliente-inicial');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Formularios</h1>
        <select
          className="border rounded-lg px-4 py-2"
          value={formType}
          onChange={(e) => setFormType(e.target.value)}
        >
          <option value="cliente-inicial">Contacto Inicial</option>
          <option value="detalles-negocio">Detalles del Negocio</option>
          <option value="requerimientos-sitio">Requerimientos del Sitio</option>
          <option value="brief">BRIEF del Proyecto</option>
          <option value="feedback">Feedback del Cliente</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {formType === 'cliente-inicial' && <FormularioContactoInicial />}
        {formType === 'detalles-negocio' && <FormularioDetallesNegocio />}
        {formType === 'requerimientos-sitio' && <FormularioRequerimientosSitio />}
        {formType === 'brief' && <FormularioBrief />}
        {formType === 'feedback' && <FormularioFeedback />}
      </div>
    </div>
  );
}

function FormularioContactoInicial() {
  const { register, handleSubmit, formState: { errors } } = useForm<ClienteInicial>();

  const onSubmit = (data: ClienteInicial) => {
    console.log(data);
    // Aquí se implementará la lógica para enviar los datos
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Información de Contacto</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            {...register('nombreCompleto', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.nombreCompleto && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cargo
          </label>
          <input
            type="text"
            {...register('cargo', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.cargo && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Empresa
          </label>
          <input
            type="text"
            {...register('empresa', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.empresa && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rubro
          </label>
          <input
            type="text"
            {...register('rubro', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.rubro && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            {...register('telefono', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.telefono && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dirección
          </label>
          <input
            type="text"
            {...register('direccion')}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sitio Web
          </label>
          <input
            type="url"
            {...register('sitioWeb')}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Redes Sociales
          </label>
          <input
            type="text"
            {...register('redesSociales')}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Send className="h-4 w-4 mr-2" />
        Enviar Información
      </button>
    </form>
  );
}

function FormularioDetallesNegocio() {
  const { register, handleSubmit, formState: { errors } } = useForm<DetallesNegocio>();

  const onSubmit = (data: DetallesNegocio) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Detalles del Negocio</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descripción de la Actividad Empresarial
          </label>
          <textarea
            {...register('descripcion', { required: true })}
            className="w-full border rounded-lg px-3 py-2 h-32"
          />
          {errors.descripcion && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Modelo de Negocio
          </label>
          <textarea
            {...register('modeloNegocio', { required: true })}
            className="w-full border rounded-lg px-3 py-2 h-32"
          />
          {errors.modeloNegocio && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fuentes Principales de Ingresos
          </label>
          <textarea
            {...register('fuentesIngresos', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.fuentesIngresos && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recursos Técnicos Existentes
          </label>
          <textarea
            {...register('recursosTecnicos', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.recursosTecnicos && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Send className="h-4 w-4 mr-2" />
        Guardar Detalles
      </button>
    </form>
  );
}

function FormularioRequerimientosSitio() {
  const { register, handleSubmit, formState: { errors } } = useForm<RequerimientosSitio>();

  const onSubmit = (data: RequerimientosSitio) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Especificaciones del Proyecto Web</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Objetivo Principal del Sitio Web
          </label>
          <textarea
            {...register('objetivo', { required: true })}
            className="w-full border rounded-lg px-3 py-2 h-32"
          />
          {errors.objetivo && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Páginas Necesarias
          </label>
          <textarea
            {...register('paginas', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.paginas && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Funcionalidades Específicas
          </label>
          <textarea
            {...register('funcionalidades', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.funcionalidades && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Público Objetivo
          </label>
          <textarea
            {...register('publicoObjetivo', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.publicoObjetivo && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expectativas
          </label>
          <textarea
            {...register('expectativas', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.expectativas && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Send className="h-4 w-4 mr-2" />
        Guardar Requerimientos
      </button>
    </form>
  );
}

function FormularioBrief() {
  const { register, handleSubmit, formState: { errors } } = useForm<Brief>();

  const onSubmit = (data: Brief) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">BRIEF del Proyecto</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descripción del Proyecto
          </label>
          <textarea
            {...register('descripcion', { required: true })}
            className="w-full border rounded-lg px-3 py-2 h-32"
          />
          {errors.descripcion && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Objetivos del Proyecto
          </label>
          <textarea
            {...register('objetivos', { required: true })}
            className="w-full border rounded-lg px-3 py-2 h-32"
          />
          {errors.objetivos && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Necesidades del Cliente
          </label>
          <textarea
            {...register('necesidades', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.necesidades && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Presupuesto Estimado
          </label>
          <input
            type="text"
            {...register('presupuesto', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.presupuesto && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plazo de Entrega Deseado
          </label>
          <input
            type="text"
            {...register('plazoEntrega', { required: true })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.plazoEntrega && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Send className="h-4 w-4 mr-2" />
        Guardar BRIEF
      </button>
    </form>
  );
}

function FormularioFeedback() {
  const { register, handleSubmit, formState: { errors } } = useForm<Feedback>();

  const onSubmit = (data: Feedback) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">Retroalimentación del Cliente</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preguntas y Objeciones
          </label>
          <textarea
            {...register('preguntas', { required: true })}
            className="w-full border rounded-lg px-3 py-2 h-32"
          />
          {errors.preguntas && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Comentarios y Sugerencias
          </label>
          <textarea
            {...register('comentarios', { required: true })}
            className="w-full border rounded-lg px-3 py-2 h-32"
          />
          {errors.comentarios && (
            <span className="text-red-500 text-sm">Este campo es requerido</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Evaluación del Servicio (1-5)
          </label>
          <input
            type="number"
            min="1"
            max="5"
            {...register('evaluacion', { 
              required: true,
              min: 1,
              max: 5
            })}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.evaluacion && (
            <span className="text-red-500 text-sm">
              Por favor ingrese un valor entre 1 y 5
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Send className="h-4 w-4 mr-2" />
        Enviar Feedback
      </button>
    </form>
  );
}