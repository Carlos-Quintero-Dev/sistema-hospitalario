import { Request, Response } from "express";
import { HistoriasClinicasService } from "../../services/historiasClinicas.service";
import { CreateHistoriaClinicaDto } from "../../domain/dtos/historiasClinicas/create-historiaClinica.dto";
import { HandleError } from "../../domain/errors/handle.error";
import { UpdateConsultaDto } from "../../domain/dtos/consultas/update-consulta.dto";
import { UpdateHistoriaClinicaDto } from "../../domain/dtos/historiasClinicas/update-historiaClinica.dto";

export class HistoriaClinicaController{
    constructor(private readonly historiaClinicaService:HistoriasClinicasService, ){}
    create = (req:Request, res:Response) => {
        const [error, createHistoriaClinicaDto] = CreateHistoriaClinicaDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.historiaClinicaService.create(createHistoriaClinicaDto!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    update = (req:Request, res:Response) => {
        const id = req.params.id 
        const [error, updateHistoriaClinicaDto] =UpdateHistoriaClinicaDto.update({...req.body, id})
        if(error) return res.status(400).json({error})
        this.historiaClinicaService.update(updateHistoriaClinicaDto!, id!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
        }
    
        delete = (req:Request, res:Response) => {
            const id = req.params.id
            this.historiaClinicaService.delete(id)
            .then(category => res.json(category))
            .catch(error => HandleError.error(error, res))
        }
    
        findAll = async (req:Request, res:Response) => {
            this.historiaClinicaService.findAll()
            .then(category => res.json(category))
            .catch(error => HandleError.error(error, res));
        }

}