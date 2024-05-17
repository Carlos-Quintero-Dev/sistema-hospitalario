export class DoctorEntity{
    constructor(
        public id_doctor: number,
        public nombre: string,
        public apellido: string,
        public cedula: number,
        public fecha_nacimiento: Date,
        public departamentoID:number,
        public ubicacionID:number
    ){};
}