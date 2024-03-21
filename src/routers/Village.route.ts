import { Router } from "express";
import {createVillage,getVillageById,updateVillage,deleteVillageById ,readAllVillage,readSingleVillage} from "../controllers/Village.controller";

const VillageRouter = Router()

VillageRouter.post("/",createVillage) 
VillageRouter.get("/",getVillageById) 
VillageRouter.patch("/",updateVillage) 
VillageRouter.delete("/",deleteVillageById)
VillageRouter.get("/",readAllVillage)
VillageRouter.get("/",readSingleVillage) 

export default VillageRouter