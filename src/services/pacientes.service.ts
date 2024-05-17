import { prisma } from "../data/postgresql/database";
import { CreatePacienteDto } from "../domain/dtos/pacientes/create-paciente.dto";
import { UpdatePacienteDto } from "../domain/dtos/pacientes/update-paciente.dto";
import { PacienteEntity } from "../domain/entities/paciente-entity";
import { CustomError } from "../domain/errors/custom.error";




export class PacientesService{
    async create (createPacienteDto:CreatePacienteDto):Promise<PacienteEntity>{
        const {fecha_nacimiento} = createPacienteDto
        try {
            const newPaciente = await prisma.paciente.create({
                data:{...createPacienteDto,
                    fecha_nacimiento: new Date(fecha_nacimiento)
                }
            })
            if( !newPaciente ) throw CustomError.badRequest("No se pudo anadir el Paciente")
        
        return newPaciente
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async update(updatePacienteDto:UpdatePacienteDto, id:string):Promise<PacienteEntity>{
        const {fecha_nacimiento} = updatePacienteDto
        try {
            const updatePaciente = await prisma.paciente.update({
                where: {id_paciente: updatePacienteDto.id_paciente},
                data: {...updatePacienteDto, 
                      fecha_nacimiento: new Date(fecha_nacimiento)
                    }
                })

            if( !updatePaciente ) throw CustomError.badRequest("No se encuentra el Paciente")
            return updatePaciente
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async findAll(): Promise<PacienteEntity[]>{
        try {
            const newPaciente = await prisma.paciente.findMany( );
        
    
            return newPaciente;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<PacienteEntity>{
        try {
            const deleteHospitalizacion= await prisma.paciente.delete({
                where: {id_paciente: +id}
            })
            if( !deleteHospitalizacion) throw CustomError.badRequest("No se encuentra el paciente")
            return deleteHospitalizacion
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
      }
}