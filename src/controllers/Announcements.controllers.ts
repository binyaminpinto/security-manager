import { RequestHandler } from "express";
import Announcements, {AnnouncementsDocument} from "../models/Announcements.model"

interface IncomingBody{
    AnnouncemenetId:string;
    AnnouncemenetPermission:Boolean;
    AnnouncesName:string;
    AnnouncemenetText:string;
    AnnouncemenetDate:Date;
    AnnouncemenetHour:Date;
}

export const createAnnouncement : RequestHandler =  async (req,res) =>{
    //אינפוט להכרזה
     const {AnnouncemenetId,AnnouncemenetPermission,AnnouncesName,  AnnouncemenetText, AnnouncemenetDate, AnnouncemenetHour}=(req.body as IncomingBody)
     // יוצר אובייקט חדש עם כל הפרטים
     const  AnnouncementsCatch = new Announcements<AnnouncementsDocument>({AnnouncemenetId,AnnouncemenetPermission,AnnouncesName,  AnnouncemenetText, AnnouncemenetDate, AnnouncemenetHour})
     //שומר את ההכרזה בדאטה בייס
     const newAnnouncement = await AnnouncementsCatch.save()
     // אם הצליח לשמור
     if(!newAnnouncement)
     return res.json({"message" : "Could Not Create Announcement "})
         // תדפיס לי אותו וגייסון שנוצר 
         res.json({"message" : "Announcement Create :)"})
         console.log(newAnnouncement)
 }
 //שןלף הכרזה מהדאטהבייס 
 export const getAnnouncementById : RequestHandler =  async (req,res) => {
     const {AnnouncementId} = req.params;
     const foundAnnouncement= await Announcements.findById (AnnouncementId)
     if(foundAnnouncement)
     {
         res.status(200).json({foundAnnouncement})
         console.log(foundAnnouncement)
     }
     else
         res.status(404).json({"error":"Announcement Not Found In DB : "})
     }
 //עדכון הכרזה
     export const updateAnnouncement : RequestHandler = async (req,res) =>{
         const {AnnouncementId} = req.params
         const {AnnouncemenetId,AnnouncemenetPermission,AnnouncesName,  AnnouncemenetText, AnnouncemenetDate, AnnouncemenetHour} = req.body as IncomingBody 
         const foundAnnouncement = await Announcements.findByIdAndUpdate({AnnouncemenetId,AnnouncemenetPermission,AnnouncesName,  AnnouncemenetText, AnnouncemenetDate, AnnouncemenetHour}
             ,{new:true});
         if(!foundAnnouncement)
           return res.status(404).json({"error":"Announcement Not Found :("})
     
          res.status(200).json({"message" :"Announcement Updated Successfully :)"})
     }
 
    //מחיקת הכרזה
     export const deleteAnnouncementById : RequestHandler =  async (req , res) => {
         const {AnnouncementId} = req.params 
         const removedAnnouncement= await Announcements.findByIdAndDelete(AnnouncementId)
         if(!removedAnnouncement)
         return res.status(400).json({"error" : "Could Not Remove Announcement :("}) 
         res.status(200).json({"message":"Announcement Removed Successfully :)"})
     }
 
 //מחזיר את כל ההכרזות
     export const readAllAnnouncements : RequestHandler = async (req , res) =>{
         const Announcement = await Announcements.find()
         res.json({Announcement})
     }
 
     //מחזיר הכרזה ספציפי
     export const readSingleAnnouncement : RequestHandler = async (req , res) =>{
         const {AnnouncementId} = req.params 
         const foundAnnouncement = await Announcements.findById(AnnouncementId)
         if(!foundAnnouncement)
           return res.status(400).json({"error":"Announcement Not Found :("})
         res.status(200).json({foundAnnouncement})
     } 