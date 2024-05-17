export class UpdateHistoriaClinicaDto{
    constructor(
        public id_historiaClinica:number,
        public fecha: Date,
        public descripcion:string,
        public doctorID:number,
        public pacienteID: number,
        public consultaID: number,
        public hospitalizacionID: number,
    ){};

    static update(object:{[key:string]:any}):[string?, UpdateHistoriaClinicaDto?]{
        const {fecha,descripcion, doctorID, pacienteID, consultaID, hospitalizacionID, id_historiaClinica} = object
        let newDate = fecha;

        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if(!id_historiaClinica) return ["Id tiene que ser un numero ", undefined];
        if( isNaN( +id_historiaClinica ) ) return ["Id tiene que ser un numero ", undefined];

        if( !doctorID ) return ["Necesita id doctor", undefined];
        if( isNaN( +doctorID ) ) return ["El id debe ser un numero", undefined];

        if( !pacienteID ) return ["Necesita id paciente", undefined];
        if( isNaN( +pacienteID ) ) return ["El id debe ser un numero", undefined];

        if( !consultaID ) return ["Necesita id consulta", undefined];
        if( isNaN( +consultaID ) ) return ["El id debe ser un numero", undefined];

        if( !hospitalizacionID ) return ["Necesita id hospitalizacion", undefined];
        if( isNaN( +hospitalizacionID ) ) return ["El id debe ser un numero", undefined];

        if(!descripcion) return ['descripcion es requerida', undefined]
        return [undefined, new UpdateHistoriaClinicaDto(+id_historiaClinica, fecha, descripcion, +doctorID, +pacienteID, +consultaID, +hospitalizacionID)]
    }
}