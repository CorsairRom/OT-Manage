// Generated by https://quicktype.io

export interface OTResponse {
  id:                   number;
  tecnico:              Tecnico;
  cliente:              ClienteRes;
  seguimiento:          Seguimiento[];
  fecha_inicio:         string;
  observaciones:        string;
  marca_equipo:         string;
  modelo_equipo:        string;
  serie_equipo:         string;
  num_parte_componente: string;
  serie_componente:     string;
  fecha_entrega:        null;
  is_active:            boolean;
  subrogante:           null;
}

export interface ClienteRes {
  id:     number;
  nombre: string;
}
export interface ProcesoRes {
  id:     number;
  nombre: string;
}
export interface ActividadRes {
  id:     number;
  nombre: string;
}

export interface Seguimiento {
  id:                 number;
  ot:                 number;
  proceso:            ProcesoRes;
  proceso_id?:        number;
  estado:             boolean;
  estado_actividades: EstadoActividades[];
}

export interface EstadoActividades {
  id:             number;
  actividad:      ActividadRes;
  actividad_id:   number;
  estado:         boolean;
  estado_proceso: number;
}

export interface Tecnico {
  id:     number;
  nombre: string;
  email:  string;
}


export interface OTForm {
  id?:                  number;
  fecha_inicio:         Date;
  cliente_id:           number;
  observaciones:        string;
  marca_equipo:         string;
  modelo_equipo:        string;
  serie_equipo:         string;
  num_parte_componente: string;
  serie_componente:     string;
  tecnico:              Tecnico;
  subrogante:           Tecnico | null;
  seguimiento:          Seguimiento[] | [];
  fecha_entrega:        Date | null;
  is_active:            boolean;
}

// Generated by https://quicktype.io

export interface ProcesosOT {
  id:          number;
  nombre:      string;
  actividades: Actividades[];
}

export interface Actividades {
  id:      number;
  nombre:  string;
  proceso: number;
}


