import { Router } from "express";
import { HistoriaClinicaController } from "./controller";
import { HistoriasClinicasService } from "../../services/historiasClinicas.service";

export class HistoriaClinicaRoute{
   static get route(): Router{
        const routes = Router();
        const historiaClinicaService = new HistoriasClinicasService();
        const controller = new HistoriaClinicaController(historiaClinicaService) 
        routes.get('/', controller.findAll);
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.post('/', controller.create)
        return routes;
    }
}