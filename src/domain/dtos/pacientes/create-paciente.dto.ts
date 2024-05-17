
export class CreatePacienteDto{
    constructor(
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public fecha_nacimiento: Date,
        public ubicacionID:number
    ){};

    static create(object:{[key:string]:any}):[string?, CreatePacienteDto?]{
        const {nombre, apellido, cedula, fecha_nacimiento, ubicacionID} = object
        let newDate = fecha_nacimiento
        
        if(!fecha_nacimiento) return ['fecha es requerida', undefined]
        if( fecha_nacimiento ){
            newDate = new Date( fecha_nacimiento );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if(!apellido) return ['apellido es requerido', undefined]
        if(!nombre) return ['nombre es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]



        if( !ubicacionID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +ubicacionID ) ) return ["El id debe ser un numero", undefined];


        return [undefined, new CreatePacienteDto(nombre, apellido, +cedula, fecha_nacimiento, +ubicacionID)]
    }
}