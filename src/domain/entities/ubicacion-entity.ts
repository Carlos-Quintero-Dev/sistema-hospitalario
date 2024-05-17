export class UbicacionEntity{
    constructor(
    public id_ubicacion: number,
    public estado: string,
    public ciudad: string,
    public municipio: string,
    public direccion: string
    ){};
}