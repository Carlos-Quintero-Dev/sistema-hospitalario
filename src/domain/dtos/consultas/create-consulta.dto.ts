
export class CreateConsultaDto{
    constructor(
        public fecha: Date,
        public diagnostico:string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateConsultaDto?]{
        const {fecha, diagnostico} = object
        let newDate = fecha;

        if( !fecha ) return ["Necesita fecha de la consulta", undefined];
        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if(!diagnostico) return ['el diagnostico es requerido', undefined]


        return [undefined, new CreateConsultaDto(fecha, diagnostico)]
    }
}
