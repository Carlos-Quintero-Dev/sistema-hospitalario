export class HistoriaClinicaEntity{
    constructor(
        public id_historiaClinica:number,
        public fecha: Date,
        public descripcion:string,
        public doctorID:number,
        public pacienteID:number,
        public consultaID:number,
        public hospitalizacionID:number
    ){};

}