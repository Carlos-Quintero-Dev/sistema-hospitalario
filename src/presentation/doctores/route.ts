import { Router } from "express";
import { DoctoresController } from "./controller";
import { DoctoresService } from "../../services/doctores.service";

export class DoctorRoute{
   static get route(): Router{
        const routes = Router();
        const doctoresService = new DoctoresService()
        const controller = new DoctoresController(doctoresService) 
        routes.get('/', controller.findAll);
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.post('/', controller.create)
        return routes;
    }
}