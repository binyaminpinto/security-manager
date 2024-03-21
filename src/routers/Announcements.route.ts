import { Router } from "express";
import {createAnnouncement, getAnnouncementById,updateAnnouncement,deleteAnnouncementById,readAllAnnouncements,readSingleAnnouncement} from "../controllers/Announcements.controllers";

const AnnouncementsRouter = Router()

AnnouncementsRouter.post("/",createAnnouncement) 
AnnouncementsRouter.get("/",getAnnouncementById) 
AnnouncementsRouter.patch("/",updateAnnouncement) 
AnnouncementsRouter.delete("/",deleteAnnouncementById)
AnnouncementsRouter.get("/",readAllAnnouncements)
AnnouncementsRouter.get("/",readSingleAnnouncement) 

export default AnnouncementsRouter