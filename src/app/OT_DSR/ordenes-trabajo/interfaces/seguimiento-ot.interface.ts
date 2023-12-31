// Generated by https://quicktype.io

export interface SeguimientoForm {
  seguimiento: Seguimiento[] | [];
}

export interface Seguimiento {
  proceso_id:         number;
  estado?:             boolean;
  estado_actividades: EstadoActividades[];
}

export interface EstadoActividades {
  actividad_id?: number;
  estado?:        boolean;
}
