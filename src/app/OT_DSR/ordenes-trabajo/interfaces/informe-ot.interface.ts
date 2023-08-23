export interface informeOTResponse {
  id: number;
  ot: number;
  usuario: number | null;
  estado_orden: string;
  informe: string;
  is_active: boolean;
  add_date: Date;
  up_date: Date | null;
}

export interface informeOTForm {
  ot: number;
  estado_orden: string;
  informe: string;
  add_date?: Date;
}

