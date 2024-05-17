import { Router } from "express";
import { HospitalizacionesController } from "./controller";
import { HospitalizacionesService } from "../../services/hospitalizaciones.service";

export class HospitalizacionesRoute{
   static get route(): Router{
        const routes = Router();
        const hospitalizacionesService = new HospitalizacionesService()
        const controller = new HospitalizacionesController(hospitalizacionesService) 
        routes.get('/', controller.findAll);
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.post('/', controller.create)
        return routes;
    }
}