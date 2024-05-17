import { Request, Response } from "express";
import { PacientesService } from "../../services/pacientes.service";
import { CreatePacienteDto } from "../../domain/dtos/pacientes/create-paciente.dto";
import { HandleError } from "../../domain/errors/handle.error";
import { UpdatePacienteDto } from "../../domain/dtos/pacientes/update-paciente.dto";

export class PacientesController{
    constructor(private readonly pacientesService:PacientesService, ){}

    create = (req:Request, res:Response) => {
        const [error, createPacientesDto] = CreatePacienteDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.pacientesService.create(createPacientesDto!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updatePacientesDto] = UpdatePacienteDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.pacientesService.update(updatePacientesDto!, id!)
    .then(category => res.json(category))
    .catch(error => HandleError.error(error, res));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.pacientesService.delete(id)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    findAll = async (req:Request, res:Response) => {
        this.pacientesService.findAll()
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
    }

}