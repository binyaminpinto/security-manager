import { RequestHandler } from "express";
import User, { UsersDocument} from "../models/Users.model";

interface IncomingBody{
    UserFName:string;
    UserLName:string;
    UserPass:string;
    UserPhone:Number;
    UserVillageNum:Number;
    UserVillageName:string;
    UserBirthDate:Date;
    UserAddress:string;
    UserAddressDescription:string;
    Userpermission:{
        DepartmentNumber:Number;
        DepartmentName:string;
        DepartmentDescription:string;
    }
}

export const createUser : RequestHandler =  async (req,res) =>{
    //אינפוט ליוזר
    const {UserFName,UserLName, UserPass, UserPhone,UserVillageNum,UserVillageName,UserBirthDate,UserAddress, UserAddressDescription, Userpermission:{DepartmentNumber,
        DepartmentName,
        DepartmentDescription}} =(req.body as IncomingBody)
    // יוצר אובייקט חדש עם כל הפרטים
    const userCatch = new User<UsersDocument>({UserFName,UserLName, UserPass, UserPhone,UserVillageNum,UserVillageName,UserBirthDate,UserAddress, UserAddressDescription, Userpermission:{DepartmentNumber,
        DepartmentName,
        DepartmentDescription}})
    //שומר את היוזר בדאטה בייס
    const newUser = await userCatch.save()
    // אם הצליח לשמור
    if(!newUser)
    return res.json({"message" : "Could Not Create User :("})
        // תדפיס לי אותו וגייסון שנוצר 
        res.json({"message" : "User Create :)"})
        console.log(newUser)
}
//שןלף יוזר מהדאטהבייס 
export const getUserByPhone : RequestHandler =  async (req,res) => {
    const {UserPhone} = req.params;
    const foundUser = await User.findById(UserPhone)
    if(foundUser)
    {
        res.status(200).json({foundUser})
        console.log(foundUser)
    }
    else
        res.status(404).json({"error":"User Not Found In DB : "})
    }

//עדכון יוזר
    export const updateUser : RequestHandler = async (req,res) =>{
        const {UserId} = req.params
        const {UserFName,UserLName, UserPass, UserPhone,UserVillageNum,UserVillageName,UserBirthDate,UserAddress, UserAddressDescription, Userpermission:{DepartmentNumber,
            DepartmentName,
            DepartmentDescription}} = req.body as IncomingBody 
        const foundUser = await User.findByIdAndUpdate(UserPhone,
            {UserFName,UserLName, UserPass, UserPhone,UserVillageNum,UserVillageName,UserBirthDate,UserAddress, UserAddressDescription, Userpermission:{DepartmentNumber,
                DepartmentName,
                DepartmentDescription}},
            {new:true});
        if(!foundUser)
          return res.status(404).json({"error":"User Not Found :("})
    
         res.status(200).json({"message" :"User Updated Successfully :)"})
    }

    //מחיקת יוזר

    export const deleteUserById : RequestHandler =  async (req , res) => {
        const {userId} = req.params 
        const removedUser = await User.findByIdAndDelete(userId)
        if(!removedUser)
        return res.status(400).json({"error" : "Could Not Remove User :("}) 
        res.status(200).json({"message":"User Removed Successfully :)"})
    }


    export const readAllUsers : RequestHandler = async (req , res) =>{
        const users = await User.find()
        res.json({users})
    }
    export const readSingleUser : RequestHandler = async (req , res) =>{
        const {userId} = req.params 
        const foundUser = await User.findById(userId)
        if(!foundUser)
          return res.status(400).json({"error":"User Not Found :("})
        res.status(200).json({foundUser})
    } 