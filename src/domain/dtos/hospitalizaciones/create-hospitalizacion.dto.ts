export class CreateHospitalizacionDto{
    constructor(
        public fecha_entrada: Date,
        public fecha_salida:string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateHospitalizacionDto?]{
        const {fecha_entrada, fecha_salida} = object
        let dateEntrada = fecha_entrada;
        let dateSalida = fecha_salida;

        if( !fecha_entrada ) return ["se necesita la fecha de entrada", undefined];
        if( fecha_entrada ){
            dateEntrada = new Date( fecha_entrada );
            if( dateEntrada.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if( !fecha_salida ) return ["se necesita la fecha de salida", undefined];
        if( fecha_salida ){
            dateSalida = new Date( fecha_salida );
            if( dateSalida.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }
        return [undefined, new CreateHospitalizacionDto(fecha_entrada, fecha_salida)]
    }
}
