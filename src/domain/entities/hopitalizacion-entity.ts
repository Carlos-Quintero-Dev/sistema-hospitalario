export class HospitalizacionEntity{
    constructor(
        public id_hospitalizacion: number,
        public fecha_entrada: Date,
        public fecha_salida: Date
    ){}
}
