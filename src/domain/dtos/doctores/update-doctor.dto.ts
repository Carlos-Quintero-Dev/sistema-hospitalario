export class UpdateDoctorDto{
    constructor(
        public id_doctor:number,
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public fecha_nacimiento: Date,
        public departamentoID:number,
        public ubicacionID:number
    ){};

    static update(object:{[key:string]:any}):[string?, UpdateDoctorDto?]{
        const {nombre, apellido, cedula, fecha_nacimiento, id_doctor,ubicacionID, departamentoID} = object
        let newDate = fecha_nacimiento;

        if(!nombre) return ['nombre es requerido', undefined]
        if(!apellido) return ['apellido es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]

        if( fecha_nacimiento ){
            newDate = new Date( fecha_nacimiento );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if(isNaN(+id_doctor)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_doctor < 0 ) return ['id tiene que ser un numero positivo', undefined]

        if( !departamentoID) return ["necesita id de departamento", undefined];
        if( isNaN( +departamentoID) ) return ["El id debe ser un numero", undefined];
        
        if( !ubicacionID ) return ["necesita id de ubicacion", undefined];
        if( isNaN( +ubicacionID ) ) return ["El id debe ser un numero", undefined];

        

        return [undefined, new UpdateDoctorDto(+id_doctor, nombre, apellido, +cedula, fecha_nacimiento, +departamentoID, +ubicacionID)]
    }
}