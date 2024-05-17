import { Request, Response } from "express";
import { UbicacionesService } from "../../services/ubicaciones.service";
import { CreateUbicacionDto } from "../../domain/dtos/ubicaciones/create-ubicacion.dto";
import { UpdateUbicacionDto } from "../../domain/dtos/ubicaciones/update-ubicacion.dto";
import { HandleError } from "../../domain/errors/handle.error";

export class UbicacionesController{
    constructor(private readonly ubicacionesService:UbicacionesService, ){}

    create = (req:Request, res:Response) => {
        const [error, createUbicacionesDto] = CreateUbicacionDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.ubicacionesService.create(createUbicacionesDto!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateUbicacionesDto] = UpdateUbicacionDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.ubicacionesService.update(updateUbicacionesDto!, id!)
    .then(category => res.json(category))
    .catch(error => HandleError.error(error, res));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.ubicacionesService.delete(id)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    findAll = async (req:Request, res:Response) => {
        this.ubicacionesService.findAll()
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
    }

}