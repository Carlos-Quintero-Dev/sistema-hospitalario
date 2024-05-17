export class UpdateDepartamentoDto{
    constructor(
        public id_departamento:number,
        public nombre: string,
        public especialidad: string
    ){};

    static update(object:{[key:string]:any}):[string?, UpdateDepartamentoDto?]{
        const {nombre, especialidad,id_departamento} = object

        if(!nombre) return ['nombre es requerido', undefined]
        if(!especialidad) return ['especialidad es requerida', undefined]

        if(isNaN(+id_departamento)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_departamento < 0 ) return ['id tiene que ser un numero positivo', undefined]

        return [undefined, new UpdateDepartamentoDto( +id_departamento, nombre, especialidad)]
    }
}