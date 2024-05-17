export class CreateHistoriaClinicaDto{
    constructor(
        public fecha: Date,
        public descripcion:string,
        public doctorID:number,
        public pacienteID: number,
        public consultaID: number,
        public hospitalizacionID: number
    ){};

    static create(object:{[key:string]:any}):[string?, CreateHistoriaClinicaDto?]{
        const {fecha,descripcion, doctorID, pacienteID, consultaID, hospitalizacionID} = object
        let newDate = fecha;

        if( !fecha ) return ["Necesita fecha", undefined];
        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if( !doctorID ) return ["Necesita id doctor", undefined];
        if( isNaN( +doctorID ) ) return ["El id debe ser un numero", undefined];

        if( !pacienteID ) return ["Necesita id paciente", undefined];
        if( isNaN( +pacienteID ) ) return ["El id debe ser un numero", undefined];

        if( !consultaID ) return ["Necesita id consulta", undefined];
        if( isNaN( +consultaID ) ) return ["El id debe ser un numero", undefined];

        if( !hospitalizacionID ) return ["Necesita id hospitalizacion", undefined];
        if( isNaN( +hospitalizacionID ) ) return ["El id debe ser un numero", undefined];

        if(!descripcion) return ['descripcion es requerida', undefined]
        return [undefined, new CreateHistoriaClinicaDto(fecha, descripcion, +doctorID, +pacienteID, +consultaID, +hospitalizacionID)]
    }
}