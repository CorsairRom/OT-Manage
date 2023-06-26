export interface PermisoDjango  {
    is_staff: boolean,
    is_superuser: boolean
}

export interface Usuario extends PermisoDjango {
    id: number;
    username: string;
    email: string;
}

export interface CreateUserForm {
    username: string;
    email: string;
    password: string;
    is_staff: boolean;
    is_superuser: boolean;
}


export enum PermisoEnum {
    SuperUsuario = 1,
    Staff = 2,
    Simple = 3
}


export interface PermisoOption {
    permName: string;
    permValue: PermisoEnum;
    permHelp: string;
}


export interface UsuarioConPermiso extends Usuario, PermisoOption {}