export class UpdateHospitalizacionDto{
    constructor(
        public id_hospitalizacion:number,
        public fecha_entrada: Date,
        public fecha_salida:Date
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateHospitalizacionDto?]{
        const {fecha_entrada, fecha_salida,id_hospitalizacion} = object
        let dateEntrada = fecha_entrada;
        let dateSalida = fecha_salida;

        if( fecha_entrada ){
            dateEntrada = new Date( fecha_entrada );
            if( dateEntrada.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if( fecha_salida ){
            dateSalida = new Date( fecha_salida );
            if( dateSalida.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if(isNaN(+id_hospitalizacion)) return ['id is of number type', undefined]
        if(+id_hospitalizacion < 0 ) return ['id must be a positive number', undefined]

        return [undefined, new UpdateHospitalizacionDto(+id_hospitalizacion, fecha_entrada, fecha_salida)]
    }
}