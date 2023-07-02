import { Fabricantes } from "../../../fabricantes/interfaces/fabricantes.model";


export interface Producto{
  codigo: string;
  modelo: string;
  nombre: string;
  nota: string;
  fabricante: Fabricantes;
  precio: number;
  estado?: boolean;
  fecha: Date;
  imagen: string;
  stock: number;
}
