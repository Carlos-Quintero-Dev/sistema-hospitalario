export class UpdateConsultaDto{
    constructor(
        public id_consulta:number,
        public fecha: Date,
        public diagnostico?:string
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateConsultaDto?]{
        const {fecha, diagnostico,id_consulta} = object
        let newDate = fecha;

        if( !fecha ) return ["Necesita fecha de la conslta", undefined];
        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }
        
        if(isNaN(+id_consulta)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_consulta < 0 ) return ['id tiene que ser un numero positivo', undefined]

        return [undefined, new UpdateConsultaDto(+id_consulta, fecha, diagnostico)]
    }
}