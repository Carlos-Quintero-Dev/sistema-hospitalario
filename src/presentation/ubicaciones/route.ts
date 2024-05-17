import { Router } from "express";
import { UbicacionesController } from "./controller";
import { UbicacionesService } from "../../services/ubicaciones.service";

export class UbicacionesRoute{
   static get route(): Router{
        const routes = Router();
        const ubicacionesService = new UbicacionesService()
        const controller = new UbicacionesController(ubicacionesService) 
        routes.get('/', controller.findAll);
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.post('/', controller.create)
        return routes;
    }
}