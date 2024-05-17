import { Request, Response } from "express";
import { CreateDoctorDto } from "../../domain/dtos/doctores/create-doctor.dto";
import { DoctoresService } from "../../services/doctores.service";
import { HandleError } from "../../domain/errors/handle.error";
import { UpdateDoctorDto } from "../../domain/dtos/doctores/update-doctor.dto";

export class DoctoresController{
    constructor(private readonly doctresSrvice:DoctoresService, ){}
    create = (req:Request, res:Response) => {
        const [error, createDoctorDto] = CreateDoctorDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.doctresSrvice.create(createDoctorDto!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    update = (req:Request, res:Response) => {
        const id = req.params.id 
        const [error, updateDoctorDto] = UpdateDoctorDto.update({...req.body, id})
        if(error) return res.status(400).json({error})
        this.doctresSrvice.update(updateDoctorDto!, id!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res));
        }
    
        delete = (req:Request, res:Response) => {
            const id = req.params.id
            this.doctresSrvice.delete(id)
            .then(category => res.json(category))
            .catch(error => HandleError.error(error, res))
        }
    
        findAll = async (req:Request, res:Response) => {
            this.doctresSrvice.findAll()
            .then(category => res.json(category))
            .catch(error => HandleError.error(error, res));
        }

}