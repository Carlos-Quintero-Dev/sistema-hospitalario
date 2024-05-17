export class CreateDoctorDto{
    constructor(
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public fecha_nacimiento: Date,
        public departamentoID:number,
        public ubicacionID:number
    ){};

    static create(object:{[key:string]:any}):[string?, CreateDoctorDto?]{
        const {nombre, apellido, cedula, fecha_nacimiento, ubicacionID, departamentoID} = object
        let newDate = fecha_nacimiento;

        if(!nombre) return ['nombre es requerido', undefined]
        if(!apellido) return ['apellido es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]

        if( fecha_nacimiento ){
            newDate = new Date( fecha_nacimiento );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }


        if( !departamentoID) return ["necesita id de departamento", undefined];
        if( isNaN( +departamentoID) ) return ["El id debe ser un numero", undefined];
        
        if( !ubicacionID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +ubicacionID ) ) return ["El id debe ser un numero", undefined];

        

        return [undefined, new CreateDoctorDto(nombre, apellido, +cedula, fecha_nacimiento, +departamentoID, +ubicacionID)]
    }
}