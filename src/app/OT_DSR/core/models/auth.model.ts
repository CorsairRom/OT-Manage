import { Usuario } from "./usuario.model";

export interface Auth {
    token: string;
    usuario: Usuario;
    mensaje: string;
}
