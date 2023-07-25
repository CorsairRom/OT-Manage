export interface SucursalesForm {
  id?: number;
  cliente_id: number;
  nombre: string;
  direccion: number;
  comuna: number;
}

// Generated by https://quicktype.io

export interface SucursalesResponse {
  id:        number;
  nombre:    string;
  direccion: string;
  cliente:   number;
  comuna:    Comuna;
  contactos: Contacto[];
}

export interface Comuna {
  id:      number;
  nom_com: string;
  nom_reg: string;
}

export interface Contacto {
  id:       number;
  nombre:   string;
  apellido: string;
  correo:   string;
  telefono: number;
  sucursal: number;
}


