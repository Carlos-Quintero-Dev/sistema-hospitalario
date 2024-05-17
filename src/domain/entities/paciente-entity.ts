export class PacienteEntity{
    constructor(
        public id_paciente: number,
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public fecha_nacimiento: Date,
        public ubicacionID:number
    ){};
}