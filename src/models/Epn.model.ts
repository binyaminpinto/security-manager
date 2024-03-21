import { Schema , model } from "mongoose";
export interface EpnDocument{
    EpnName:string;
    EpnDescription:string;
    EpnNumber:Number;
}

const EpnSchema = new Schema({
    EpnName:{
        type:String , 
        require:true,
         
    },
    EpnDescription:{
        type:String , 
        require:true,
       
    },
    EpnNumber:{
        type:Number , 
        require:true,
        trim:true 
    }
})

export default model<EpnDocument>("Epn", EpnSchema)