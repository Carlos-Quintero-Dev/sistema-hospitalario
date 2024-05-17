export class UpdateUbicacionDto{
    constructor(
        public id_ubicacion:number,
        public estado: string,
        public ciudad: string,
        public municipio: string,
        public direccion: string
    ){};

    static update(object:{[key:string]:any}):[string?, UpdateUbicacionDto?]{
        const {estado, ciudad, municipio, direccion,id_ubicacion} = object

        if(!municipio) return ['municipio es requerido', undefined]
        if(!ciudad) return ['ciudad es requerido', undefined]
        if(!estado) return ['estado es requerido', undefined]
        if(!direccion) return ['direccion is required', undefined]

        if(isNaN(+id_ubicacion)) return ['id is of number type', undefined]
        if(+id_ubicacion < 0 ) return ['id must be a positive number', undefined]

        return [undefined, new UpdateUbicacionDto(id_ubicacion,estado, ciudad, municipio, direccion)]
    }
}