import { prisma } from "../data/postgresql/database";
import { CreateUbicacionDto } from "../domain/dtos/ubicaciones/create-ubicacion.dto";
import { UpdateUbicacionDto } from "../domain/dtos/ubicaciones/update-ubicacion.dto";
import { UbicacionEntity } from "../domain/entities/ubicacion-entity";
import { CustomError } from "../domain/errors/custom.error";




export class UbicacionesService{
    async create (createUbicacionDto:CreateUbicacionDto):Promise<UbicacionEntity>{
        try {
            const newUbicacion = await prisma.ubicacion.create({
                data:{...createUbicacionDto
                }
            })
            if( !newUbicacion ) throw CustomError.badRequest("No se pudo anadir el Paciente")
        
        return newUbicacion
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async update(updateUbicacionDto:UpdateUbicacionDto, id:string):Promise<UbicacionEntity>{
        try {
            const updateUbicacion = await prisma.ubicacion.update({
                where: {id_ubicacion: updateUbicacionDto.id_ubicacion},
                data: {...updateUbicacionDto
                    }
                })

            if( !updateUbicacion ) throw CustomError.badRequest("No se encuentra el Paciente")
            return updateUbicacion
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async findAll(): Promise<UbicacionEntity[]>{
        try {
            const newUbicacion = await prisma.ubicacion.findMany( );
        
    
            return newUbicacion;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<UbicacionEntity>{
        try {
            const deleteHospitalizacion= await prisma.ubicacion.delete({
                where: {id_ubicacion: +id}
            })
            if( !deleteHospitalizacion) throw CustomError.badRequest("No se encuentra el paciente")
            return deleteHospitalizacion
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
      }
}