import { Schema , model } from "mongoose";

export interface UsersDocument{
   
    UserVillageNum:Number;
    UserVillageName:string;
     UserFName:string;
    UserLName:string;
    UserPass:string;
    UserPhone:Number;UserBirthDate:Date;
    UserAddress:string;
    UserAddressDescription:string;
    
}

const UserSchema = new Schema({
    UserFName:{
        type:String , 
        require:true,
       
    },
    UserLName:{
        type:String , 
        require:true,
       
    },
    UserPass:{
        type:String , 
        require:true,
        trim:true
    },
    UserPhone:{
        type:Number , 
        require:true,
        trim:true
    },
    UserVillageNum:{
        type:Number , 
        require:true,
        trim:true
    },
    UserVillageName:{
        type:String , 
        require:true,
       
    },
    UserBirthDate:{
        type:Date , 
        require:true,
        
    },
    UserAddress:{
        type:String , 
        require:true,
       
    },
    UserAddressDescription:{
        type:String , 
        require:true,
       
    },
    Userpermission:{
        DepartmentNumber:{
            type:Number , 
            require:true,
            trim:true
        },
        DepartmentName:{
            type:String , 
            require:true,
           
        },
        DepartmentDescription:{
            type:String , 
            require:true,
        
        }
    }
})

export default model< UsersDocument>("Users", UserSchema)