export interface Fabricantes {
  id: number;
  nombre: string;
  estado: boolean;
  fecha: Date;
  num_productos: number;
}

export interface FabricanteForm{
  nombre: string;
  estado: boolean;
  fecha: Date;
  num_productos: number;
}
