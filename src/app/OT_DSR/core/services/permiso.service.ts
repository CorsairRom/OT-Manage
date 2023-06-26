
import {Injectable} from '@angular/core'
import { PermisoEnum, PermisoOption, Usuario, PermisoDjango } from '../models/usuario.model'


@Injectable({
    providedIn: 'root'
})
export class PermisoService {
    permisiosOption: PermisoOption[] = [
        { permName: 'Super usuario', permValue: PermisoEnum.SuperUsuario, permHelp: '* Usuario con acceso a todas las funcionalidades.'},
        { permName: 'Staff', permValue: PermisoEnum.Staff, permHelp: '* Usuario con acceso a todas las funcionalidades con excepción de la gestión de cuentas de usuarios.'},
        { permName: 'Simple', permValue: PermisoEnum.Simple, permHelp: '* Usuario con acceso solo a funciones de caja chica.'},
    ]

    mapfromUsuario(user: Usuario) {
        if (user.is_staff && user.is_superuser) {
            return this.permisiosOption[0]
        }
        else if (user.is_staff){
            return this.permisiosOption[1]
        } else {

            return this.permisiosOption[2]
        }
    }

    mapToDjango(permiso: PermisoEnum): PermisoDjango{
        if(permiso === PermisoEnum.SuperUsuario) {
            return {is_staff: true, is_superuser: true}
        }
        else if(permiso === PermisoEnum.Staff){
            return {is_staff: true, is_superuser: false}
        } else {
            return {is_staff: false, is_superuser: false}
        } 
    }
}