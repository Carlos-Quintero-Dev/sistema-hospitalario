export class UpdatePacienteDto{
    constructor(
        public id_paciente:number,
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public fecha_nacimiento: Date,
        public ubicacionID:number
    ){};

    static update(object:{[key:string]:any}):[string?, UpdatePacienteDto?]{
        const {nombre, apellido, cedula, fecha_nacimiento, ubicacionID, id_paciente} = object
        let newDate = fecha_nacimiento
        
        if(!fecha_nacimiento) return ['fecha de nacimiento es requerida', undefined]
        if( fecha_nacimiento ){
            newDate = new Date( fecha_nacimiento );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if(!apellido) return ['apellido es requerido', undefined]
        if(!nombre) return ['nombre es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]

        if(isNaN(+id_paciente)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_paciente < 0 ) return ['id tiene que ser un numero positivo', undefined]

        if( !ubicacionID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +ubicacionID ) ) return ["El id debe ser un numero", undefined];

        return [undefined, new UpdatePacienteDto(+id_paciente, nombre, apellido, +cedula, fecha_nacimiento, +ubicacionID)]
    }
}