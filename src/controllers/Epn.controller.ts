import { RequestHandler } from "express";
import Epn, {EpnDocument} from "../models/Epn.model"

interface IncomingBody{
    EpnName:string;
    EpnDescription:string;
    EpnNumber:Number;
}

export const createEpn : RequestHandler =  async (req,res) =>{
        //אינפוט למספר חירום
         const { EpnName,  EpnDescription, EpnNumber}=(req.body as IncomingBody)
     // יוצר אובייקט חדש עם כל הפרטים
     const  EpnCatch = new Epn<EpnDocument>({EpnName,  EpnDescription, EpnNumber})
     //שומר את המספר חירום בדאטה בייס
     const newEpn = await EpnCatch.save()
     // אם הצליח לשמור
     if(!newEpn)
     return res.json({"message" : "Could Not Create Epn "})
         // תדפיס לי אותו וגייסון שנוצר 
         res.json({"message" : "Epn Create :)"})
         console.log(newEpn)
 }
 //שןלף המספר חירום מהדאטהבייס 
 export const getEpnById : RequestHandler =  async (req,res) => {
     const {EpnId} = req.params;
     const foundEpn= await Epn.findById (EpnId)
     if(foundEpn)
     {
         res.status(200).json({foundEpn})
         console.log(foundEpn)
     }
     else
         res.status(404).json({"error":"Epn Not Found In DB : "})
     }
 //עדכון מספר חירוםה
     export const updateEpn : RequestHandler = async (req,res) =>{
         const {EpnId} = req.params
         const {EpnName,  EpnDescription, EpnNumber} = req.body as IncomingBody 
         const foundEpn = await Epn.findByIdAndUpdate({}
             ,{new:true});
         if(!foundEpn)
           return res.status(404).json({"error":"Epn Not Found :("})
     
          res.status(200).json({"message" :"Epn Updated Successfully :)"})
     }
 
    //מחיקת מספר חירוםה
     export const deleteEpnById : RequestHandler =  async (req , res) => {
         const {EpnId} = req.params 
         const removedEpn= await Epn.findByIdAndDelete(EpnId)
         if(!removedEpn)
         return res.status(400).json({"error" : "Could Not Remove Epn :("}) 
         res.status(200).json({"message":"Epn Removed Successfully :)"})
     }
 
 //מחזיר את כל המספרי חירוםת
     export const readAllEpn : RequestHandler = async (req , res) =>{
         const Epns = await Epn.find()
         res.json({Epns})
     }
 
     //מחזיר מספר חירום ספציפי
     export const readSingleEpn : RequestHandler = async (req , res) =>{
         const {EpnId} = req.params 
         const foundEpn = await Epn.findById(EpnId)
         if(!foundEpn)
           return res.status(400).json({"error":"Epn Not Found :("})
         res.status(200).json({foundEpn})
     } 