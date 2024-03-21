import { Router } from "express";
import {createReport ,getReportById,updateReport, deleteReportById,readAllReports,readSingleReport} from "../controllers/Reports.controller";

const ReportsRouter = Router()

ReportsRouter.post("/",createReport) 
ReportsRouter.get("/",getReportById) 
ReportsRouter.patch("/",updateReport) 
ReportsRouter.delete("/",deleteReportById)
ReportsRouter.get("/",readAllReports)
ReportsRouter.get("/",readSingleReport) 

export default ReportsRouter