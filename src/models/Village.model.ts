import { Schema , model } from "mongoose";

export interface VillageDocument{
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

const VillageSchema = new Schema({
    VillageName:{
        type: String,
        require : true , 
        
    },
    VillageNum:{
        type: Number,
        require : true,
        trim: true
    },
    AreaNum:{
        type: Number,
        require : true,
        trim: true
    },
    Events:{
        EventNum:{
            type: Number,
            require : true,
            trim: true
        },
        EventStatus:{
            type: String,
            require : true,
            
        },
        EventDescription:{
            type: String,
            require : true,
        },
        EventDate:{
            type: Date,
            require : true,
            
        },
        EventHour:{
            type: Date,
            require : true,
            
        },
        EventLocation:{
            type: String,
            require : true,
            
        },
     
        Practice:{
            IsPractice:{
                type: Boolean,
                require : true,
                
            },
            DueDate:{
                type: Date,
                require : true,
                
            },
            Userpermission:{
                type: Number,
                require : true,
                trim: true
            } 
        }
    }
})

export default model<VillageDocument>("Village", VillageSchema)