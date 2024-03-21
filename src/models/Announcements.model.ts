import { Schema , model } from "mongoose";
export interface AnnouncementsDocument{
    AnnouncemenetId:string;
    AnnouncemenetPermission:Boolean;
    AnnouncesName:string;
    AnnouncemenetText:string;
    AnnouncemenetDate:Date;
    AnnouncemenetHour:Date;
}

const AnnouncemenetsSchema = new Schema({
    AnnouncemenetId:{
        type:String , 
        require:true,
        trim:true
    },
    AnnouncemenetPermission:{
        type:Boolean , 
        require:true,      
    },
    AnnouncesName:{
        type:String , 
        require:true,
    },
    AnnouncemenetText:{
        type:String , 
        require:true,
       
    },
    AnnouncemenetDate:{
        type:Date , 
        require:true,
    },
    AnnouncemenetHour:{
        type:Date , 
        require:true,
    }
})
export default model<AnnouncementsDocument>("Announcements",AnnouncemenetsSchema )