export interface ClienteInicial {
  nombreCompleto: string;
  cargo: string;
  empresa: string;
  rubro: string;
  telefono: string;
  direccion: string;
  sitioWeb: string;
  redesSociales: string;
}

export interface DetallesNegocio {
  descripcion: string;
  modeloNegocio: string;
  fuentesIngresos: string;
  recursosTecnicos: string;
}

export interface RequerimientosSitio {
  objetivo: string;
  paginas: string;
  funcionalidades: string;
  publicoObjetivo: string;
  expectativas: string;
}

export interface Brief {
  descripcion: string;
  objetivos: string;
  necesidades: string;
  presupuesto: string;
  plazoEntrega: string;
}

export interface Feedback {
  preguntas: string;
  comentarios: string;
  evaluacion: number;
}

export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  url?: string;
}