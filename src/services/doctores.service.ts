import { prisma } from "../data/postgresql/database";
import { CreateDoctorDto } from "../domain/dtos/doctores/create-doctor.dto";
import { UpdateDoctorDto } from "../domain/dtos/doctores/update-doctor.dto";
import { DoctorEntity } from "../domain/entities/doctor-entity";
import { CustomError } from "../domain/errors/custom.error";



export class DoctoresService{
    async create (createDoctorDto:CreateDoctorDto):Promise<DoctorEntity>{
        const {fecha_nacimiento} = createDoctorDto
        try {
            const newDoctor = await prisma.doctor.create({
                data: {...createDoctorDto,
                    fecha_nacimiento: new Date(fecha_nacimiento)
                }
            })
            if( !newDoctor ) throw CustomError.badRequest("No se pudo Anadir el doctor")
        
        return newDoctor
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async update(updateDoctorDto:UpdateDoctorDto, id:string):Promise<DoctorEntity>{
        try {
            const updateDoctor = await prisma.doctor.update({
                where: {id_doctor: updateDoctorDto.id_doctor},
                data: {...updateDoctorDto, id_doctor: +id}
            })
            if( !updateDoctor ) throw CustomError.badRequest("No se encuentra el doctor")
            return updateDoctor
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async findAll(): Promise<DoctorEntity[]>{
        try {
            const newDoctor = await prisma.doctor.findMany( );
            //if( !newEquipo ) throw Error;
    
            return newDoctor;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<DoctorEntity>{
        try {
            const deleteDoctor = await prisma.doctor.delete({
                where: {id_doctor: +id}
            })
            if( !deleteDoctor) throw CustomError.badRequest("No se encuentra el doctor")
            return deleteDoctor
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
      }

}