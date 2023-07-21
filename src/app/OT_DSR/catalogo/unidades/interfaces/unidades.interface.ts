// Generated by https://quicktype.io

export interface UnidadesResponse {
  codigo?:      string;
  nombre:      string;
  estado:      boolean;
  subunidades: SubunidadResponse[] | [];
}

export interface SubunidadResponse {
  codigo?: string;
  unidad: string;
  nombre: string;
  estado?: boolean;
}

