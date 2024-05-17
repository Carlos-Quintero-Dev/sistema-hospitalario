import { prisma } from "../data/postgresql/database";
import { CreateHospitalizacionDto } from "../domain/dtos/hospitalizaciones/create-hospitalizacion.dto";
import { UpdateHospitalizacionDto } from "../domain/dtos/hospitalizaciones/update-hospitalizacion.dto";
import { HospitalizacionEntity } from "../domain/entities/hopitalizacion-entity";
import { CustomError } from "../domain/errors/custom.error";



export class HospitalizacionesService{
    async create (createHospitalizacionDto:CreateHospitalizacionDto):Promise<HospitalizacionEntity>{
        const {fecha_entrada, fecha_salida} = createHospitalizacionDto
        try {
            const newHospitalizacion = await prisma.hospitalizacion.create({
                data:{...createHospitalizacionDto,
                    fecha_entrada: new Date(fecha_entrada),
                    fecha_salida: new Date(fecha_salida)
                }
            })
            if( !newHospitalizacion ) throw CustomError.badRequest("No se pudo crear la hospitalizacion")
        
        return newHospitalizacion
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async update(updateHospitalizacionDto:UpdateHospitalizacionDto, id:string):Promise<HospitalizacionEntity>{
        const {fecha_entrada, fecha_salida} = updateHospitalizacionDto
        try {
            const updateHospitalizacion = await prisma.hospitalizacion.update({
                where: {id_hospitalizacion: updateHospitalizacionDto.id_hospitalizacion},
                data: {...updateHospitalizacionDto, 
                      fecha_entrada: new Date(fecha_entrada),
                      fecha_salida: new Date(fecha_salida)
                    }
                })

            if( !updateHospitalizacion ) throw CustomError.badRequest("No se encuentra la hospitalizacion")
            return updateHospitalizacion
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async findAll(): Promise<HospitalizacionEntity[]>{
        try {
            const newHospitalizacion = await prisma.hospitalizacion.findMany( );
        
    
            return newHospitalizacion;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<HospitalizacionEntity>{
        try {
            const deleteHospitalizacion= await prisma.hospitalizacion.delete({
                where: {id_hospitalizacion: +id}
            })
            if( !deleteHospitalizacion) throw CustomError.badRequest("No se encuentra la hospitalizacion")
            return deleteHospitalizacion
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
      }

}