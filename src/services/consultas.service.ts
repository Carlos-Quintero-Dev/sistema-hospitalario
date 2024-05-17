import { prisma } from "../data/postgresql/database";
import { CreateConsultaDto } from "../domain/dtos/consultas/create-consulta.dto";
import { UpdateConsultaDto } from "../domain/dtos/consultas/update-consulta.dto";
import { ConsultaEntity } from "../domain/entities/consulta-entity";
import { CustomError } from "../domain/errors/custom.error";


export class ConsultasService{
    async create (createConsultaDto:CreateConsultaDto):Promise<ConsultaEntity>{
        const {fecha} = createConsultaDto
        try {
            const newConsulta = await prisma.consulta.create({
                data:{...createConsultaDto,
                    fecha: new Date(fecha)
                }
            })
            if( !newConsulta ) throw CustomError.badRequest("No se pudo crear la consulta")
        
        return newConsulta
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async update(updateConsultaDto:UpdateConsultaDto, id:string):Promise<ConsultaEntity>{
        const {fecha} = updateConsultaDto
        try {
            const updateConsulta = await prisma.consulta.update({
                where: {id_consulta: updateConsultaDto.id_consulta},
                data: {...updateConsultaDto, 
                      fecha: new Date(fecha)}
            })
            if( !updateConsulta ) throw CustomError.badRequest("No se encuentra la consulta")
            return updateConsulta
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async findAll(): Promise<ConsultaEntity[]>{
        try {
            const newConsulta = await prisma.consulta.findMany( );
            //if( !newEquipo ) throw Error;
    
            return newConsulta;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<ConsultaEntity>{
        try {
            const deleteConsulta= await prisma.consulta.delete({
                where: {id_consulta: +id}
            })
            if( !deleteConsulta) throw CustomError.badRequest("No se encuentra la consulta")
            return deleteConsulta
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
      }

}