export class DepartamentoEntity{
    constructor(
        public nombre: string,
        public especialidad:string,
        public id_departamento?:number,
    ){};
}