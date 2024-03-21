import { Schema , model } from "mongoose";

export interface ReportsDocument{
    ReportId:string;
    ReportStatus:string;
    ReportDescription:string;
    whoReportedPhoneNum:Number;
}

const ReportsSchema = new Schema({
    ReportId:{
        type:String , 
        require:true,
        trim:true
    },
    ReportStatus:{
        type:String , 
        require:true,
       
    },
    ReportDescription:{
        type:String , 
        require:true,
       
    },
    whoReportedPhoneNum:{
        type:Number , 
        require:true,
        trim:true
    }
})

export default model<ReportsDocument>("Reports", ReportsSchema)