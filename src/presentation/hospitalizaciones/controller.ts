import { Request, Response } from "express";
import { HospitalizacionesService } from "../../services/hospitalizaciones.service";
import { CreateHospitalizacionDto } from "../../domain/dtos/hospitalizaciones/create-hospitalizacion.dto";
import { HandleError } from "../../domain/errors/handle.error";
import { UpdateHospitalizacionDto } from "../../domain/dtos/hospitalizaciones/update-hospitalizacion.dto";

export class HospitalizacionesController{
    constructor(private readonly hospitalizacionesService:HospitalizacionesService, ){}

    create = (req:Request, res:Response) => {
        const [error, createHospitalizacionDto] = CreateHospitalizacionDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.hospitalizacionesService.create(createHospitalizacionDto!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateHospitalizacionDto] = UpdateHospitalizacionDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.hospitalizacionesService.update(updateHospitalizacionDto!, id!)
    .then(category => res.json(category))
    .catch(error => HandleError.error(error, res));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.hospitalizacionesService.delete(id)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    findAll = async (req:Request, res:Response) => {
        this.hospitalizacionesService.findAll()
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
    }
}