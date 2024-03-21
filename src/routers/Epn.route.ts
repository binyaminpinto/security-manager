import { Router } from "express";
import{createEpn, getEpnById,updateEpn, deleteEpnById,readAllEpn,readSingleEpn} from "../controllers/Epn.controller";

const EpnRouter = Router()

EpnRouter.post("/",createEpn) 
EpnRouter.get("/",getEpnById) 
EpnRouter.patch("/",updateEpn) 
EpnRouter.delete("/",deleteEpnById)
EpnRouter.get("/",readAllEpn)
EpnRouter.get("/",readSingleEpn) 

export default EpnRouter