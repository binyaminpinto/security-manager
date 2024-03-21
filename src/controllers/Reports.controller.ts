import { RequestHandler } from "express";
import Reports, {ReportsDocument} from "../models/Reports.model"

interface IncomingBody{
    ReportId:string;
    ReportStatus:string;
    ReportDescription:string;
    whoReportedPhoneNum:Number;
}

export const createReport : RequestHandler =  async (req,res) =>{
    //אינפוט לדיווח
     const { ReportId,ReportStatus,ReportDescription, whoReportedPhoneNum}=(req.body as IncomingBody)
 // יוצר אובייקט חדש עם כל הפרטים
 const  ReportCatch = new Reports<ReportsDocument>({ReportId,ReportStatus,ReportDescription, whoReportedPhoneNum})
 //שומר את הדיווח בדאטה בייס
 const newReport = await ReportCatch.save()
 // אם הצליח לשמור
 if(!newReport)
 return res.json({"message" : "Could Not Create Report "})
     // תדפיס לי אותו וגייסון שנוצר 
     res.json({"message" : "Report Create :)"})
     console.log(newReport)
}
//שןלף דיווח מהדאטהבייס 
export const getReportById : RequestHandler =  async (req,res) => {
 const {ReportId} = req.params;
 const foundReport= await Reports.findById (ReportId)
 if(foundReport)
 {
     res.status(200).json({foundReport})
     console.log(foundReport)
 }
 else
     res.status(404).json({"error":"Report Not Found In DB : "})
 }
//עדכון דיווחה
 export const updateReport : RequestHandler = async (req,res) =>{
     const {EpnReport} = req.params
     const {ReportId,ReportStatus,ReportDescription, whoReportedPhoneNum} = req.body as IncomingBody 
     const foundReport = await Reports.findByIdAndUpdate({}
         ,{new:true});
     if(!foundReport)
       return res.status(404).json({"error":"Report Not Found :("})
 
      res.status(200).json({"message" :"Report Updated Successfully :)"})
 }

//מחיקת דיווחה
 export const deleteReportById : RequestHandler =  async (req , res) => {
     const {ReportId} = req.params 
     const removedReport= await Reports.findByIdAndDelete(ReportId)
     if(!removedReport)
     return res.status(400).json({"error" : "Could Not Remove Report :("}) 
     res.status(200).json({"message":"Report Removed Successfully :)"})
 }

//מחזיר את כל הדיווחיםת
 export const readAllReports : RequestHandler = async (req , res) =>{
     const Report = await Reports.find()
     res.json({Report})
 }

 //מחזיר דיווח ספציפי
 export const readSingleReport : RequestHandler = async (req , res) =>{
     const {ReportId} = req.params 
     const foundReport = await Reports.findById(ReportId)
     if(!foundReport)
       return res.status(400).json({"error":"Report Not Found :("})
     res.status(200).json({foundReport})
 } 