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

export interface ProcesoOTSelect{
  id: number;
  nombre: string;
}

