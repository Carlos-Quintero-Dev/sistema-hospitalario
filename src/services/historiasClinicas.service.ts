import { prisma } from "../data/postgresql/database";
import { UpdateConsultaDto } from "../domain/dtos/consultas/update-consulta.dto";
import { CreateHistoriaClinicaDto } from "../domain/dtos/historiasClinicas/create-historiaClinica.dto";
import { UpdateHistoriaClinicaDto } from "../domain/dtos/historiasClinicas/update-historiaClinica.dto";
import { HistoriaClinicaEntity } from "../domain/entities/historiaClinica-entity";
import { CustomError } from "../domain/errors/custom.error";



export class HistoriasClinicasService{
    async create (createHistoriaClinicaDto: CreateHistoriaClinicaDto):Promise<HistoriaClinicaEntity>{
        const {fecha} = createHistoriaClinicaDto
        try {
            const newHistoriaClinica = await prisma.historia_clinica.create({
                data:{...createHistoriaClinicaDto,
                    fecha: new Date(fecha)
                }
            })
            if( !newHistoriaClinica ) throw CustomError.badRequest("No se pudo crear la Historia clinica")
        
        return newHistoriaClinica
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async update(updateHistoriaClinicaDto:UpdateHistoriaClinicaDto, id:string):Promise<HistoriaClinicaEntity>{
        const {fecha} = updateHistoriaClinicaDto
        try {
            const updateHistoriaClinica= await prisma.historia_clinica.update({
                where: {id_historiaClinica: updateHistoriaClinicaDto.id_historiaClinica},
                data: {...updateHistoriaClinicaDto, 
                      fecha: new Date(fecha)}
            })
            if( !updateHistoriaClinica ) throw CustomError.badRequest("No se encuentra la Historia clinica")

            return updateHistoriaClinica
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async findAll(): Promise<HistoriaClinicaEntity[]>{
        try {
            const newHistoriaClinica = await prisma.historia_clinica.findMany( );
    
            return newHistoriaClinica;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<HistoriaClinicaEntity>{
        try {
            const deleteHistoriaClinica = await prisma.historia_clinica.delete({
                where: {id_historiaClinica: +id}
            })
            if( !deleteHistoriaClinica) throw CustomError.badRequest("No se encuentra la Historia clinica")
            return deleteHistoriaClinica
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
      }

}