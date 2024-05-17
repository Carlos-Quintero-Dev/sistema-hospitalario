export class ConsultaEntity{
    constructor(
        public id_consulta: number,
        public fecha: Date,
        public diagnostico:string
    ){}
}
