import { prisma } from "../data/postgresql/database";
import { CreateDepartamentoDto } from "../domain/dtos/departamentos/create-departamento.dto";
import { UpdateDepartamentoDto } from "../domain/dtos/departamentos/update-departamento.dto";
import { DepartamentoEntity } from "../domain/entities/departamento-entity";
import { CustomError } from "../domain/errors/custom.error";

export class DepartamentoService {
  async create (createDepartamentoDto:CreateDepartamentoDto):Promise<DepartamentoEntity>{
    try {
        const newDepartamento = await prisma.departamentos.create({
            data:{...createDepartamentoDto}
        })
        if( !newDepartamento ) throw CustomError.badRequest("No se pudo crear el departamento")
    
    return newDepartamento
    } catch (error) {
        if( error instanceof CustomError ) throw error;
        throw CustomError.internalServer(); 
    }
  }

  async update(updateDepartamentoDto:UpdateDepartamentoDto, id:string):Promise<DepartamentoEntity>{
    try {
        const updateDepartamento = await prisma.departamentos.update({
            where: {id_dapartamento: updateDepartamentoDto.id_departamento},
            data: {...updateDepartamentoDto, id_dapartamento: +id}
        })
        if( !updateDepartamento) throw CustomError.badRequest("No se encuentra el departamento")
        return updateDepartamento
    } catch (error) {
        if( error instanceof CustomError ) throw error;
        throw CustomError.internalServer();
    }
  }

  async findAll(): Promise<DepartamentoEntity[]>{
    try {
        const newDepartamento = await prisma.departamentos.findMany( );

        return newDepartamento;
    } catch (error) {
        throw error;
    }
}

async delete(id:string):Promise<DepartamentoEntity>{
    try {
        const deleteDepartamento = await prisma.departamentos.delete({
            where: {id_dapartamento: +id}
        })
        if( !deleteDepartamento) throw CustomError.badRequest("No se encuentra el departamento")
        return deleteDepartamento
    } catch (error) {
        if( error instanceof CustomError ) throw error;
        throw CustomError.internalServer();
    }
  }

}
