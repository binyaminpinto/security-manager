import { RequestHandler } from "express";
import Village, {VillageDocument} from "../models/Village.model"

interface IncomingBody{
    VillageName:string;
    VillageNum:Number;
    AreaNum:Number;
    Events:{
        EventNum:Number;
        EventStatus:string;
        EventDescription:string;
        EventDate:Date;
        EventHour:Date;
        EventLocation:string;
     
        Practice:{
            IsPractice?:Boolean;
            DueDate:Date;
            Userpermission: Number;
        }
    }
}

export const createVillage : RequestHandler =  async (req,res) =>{
   //אינפוט ליישוב
    const {VillageName,VillageNum, AreaNum,Events:{EventNum,EventStatus,  EventDescription, EventDate, EventHour,   EventLocation,  Practice:{ IsPractice,  DueDate, Userpermission}}}=(req.body as IncomingBody)
    // יוצר אובייקט חדש עם כל הפרטים
    const VillageCatch = new Village<VillageDocument>({VillageName,VillageNum, AreaNum,Events:{EventNum,EventStatus,  EventDescription, EventDate, EventHour,   EventLocation,  Practice:{ IsPractice,  DueDate, Userpermission}}})
    //שומר את הישוב בדאטה בייס
    const newVillage = await VillageCatch.save()
    // אם הצליח לשמור
    if(!newVillage)
    return res.json({"message" : "Could Not Create Village "})
        // תדפיס לי אותו וגייסון שנוצר 
        res.json({"message" : "Village Create :)"})
        console.log(newVillage)
}
//שןלף ישוב מהדאטהבייס 
export const getVillageById : RequestHandler =  async (req,res) => {
    const {VillageId} = req.params;
    const foundVillage= await Village.findById (VillageId)
    if(foundVillage)
    {
        res.status(200).json({foundVillage})
        console.log(foundVillage)
    }
    else
        res.status(404).json({"error":"Village Not Found In DB : "})
    }
//עדכון יישוב
    export const updateVillage : RequestHandler = async (req,res) =>{
        const {VillageId} = req.params
        const {VillageName,VillageNum, AreaNum,Events:{EventNum,EventStatus,  EventDescription, EventDate, EventHour,   EventLocation,  Practice:{ IsPractice,  DueDate, Userpermission}}} = req.body as IncomingBody 
        const foundVillage = await Village.findByIdAndUpdate({VillageId,VillageName,VillageNum, AreaNum,Events:{EventNum,EventStatus,  EventDescription, EventDate, EventHour,   EventLocation,  Practice:{ IsPractice,  DueDate, Userpermission}}}
            ,{new:true});
        if(!foundVillage)
          return res.status(404).json({"error":"Village Not Found :("})
    
         res.status(200).json({"message" :"Village Updated Successfully :)"})
    }

   //מחיקת יישוב

    export const deleteVillageById : RequestHandler =  async (req , res) => {
        const {VillageId} = req.params 
        const removedVillage= await Village.findByIdAndDelete(VillageId)
        if(!removedVillage)
        return res.status(400).json({"error" : "Could Not Remove Village :("}) 
        res.status(200).json({"message":"Village Removed Successfully :)"})
    }

//מחזיר את כל היישובים
    export const readAllVillage : RequestHandler = async (req , res) =>{
        const Villages = await Village.find()
        res.json({Villages})
    }

    //מחזיר יישוב ספציפי
    export const readSingleVillage : RequestHandler = async (req , res) =>{
        const {VillageId} = req.params 
        const foundVillage = await Village.findById(VillageId)
        if(!foundVillage)
          return res.status(400).json({"error":"Village Not Found :("})
        res.status(200).json({foundVillage})
    } 