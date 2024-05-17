import { Request, Response } from "express";
import { CreateDepartamentoDto } from "../../domain/dtos/departamentos/create-departamento.dto";
import { DepartamentoService } from "../../services/departamento.service";
import { HandleError } from "../../domain/errors/handle.error";
import { UpdateDepartamentoDto } from "../../domain/dtos/departamentos/update-departamento.dto";

export class DepartamentosController{
    constructor(private readonly departamentoService:DepartamentoService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createDepartamentoDto] = CreateDepartamentoDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.departamentoService.create(createDepartamentoDto!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    update = (req:Request, res:Response) => {
        const id = req.params.id 
        const [error, updateDepartamentoDto] = UpdateDepartamentoDto.update({...req.body, id})
        if(error) return res.status(400).json({error})
        this.departamentoService.update(updateDepartamentoDto!, id!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
        }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.departamentoService.delete(id)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    findAll = async (req:Request, res:Response) => {
        this.departamentoService.findAll()
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
    }

}