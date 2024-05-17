import { Request, Response } from "express";
import { ConsultasService } from "../../services/consultas.service";
import { CreateConsultaDto } from "../../domain/dtos/consultas/create-consulta.dto";
import { UpdateConsultaDto } from "../../domain/dtos/consultas/update-consulta.dto";
import { HandleError } from "../../domain/errors/handle.error";

export class consultasController{
    constructor(private readonly consultasService:ConsultasService, ){}

    create = (req:Request, res:Response) => {
        const [error, createConsultaDto] = CreateConsultaDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.consultasService.create(createConsultaDto!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateConsultaDto] = UpdateConsultaDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.consultasService.update(updateConsultaDto!, id!)
    .then(category => res.json(category))
    .catch(error => HandleError.error(error, res));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.consultasService.delete(id)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    findAll = async (req:Request, res:Response) => {
        this.consultasService.findAll()
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
    }
}
