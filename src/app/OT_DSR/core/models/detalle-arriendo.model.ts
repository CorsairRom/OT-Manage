export interface DetalleArriendo {
    id?: number;
    fecha_pago: Date;
    arriendo: number;
    monto_pago: number | null;
}
