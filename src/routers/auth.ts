import UsersModel from "../models/Users.model";
import { Router } from "express";

const router= Router();

router.post('/singhUp', async (req,res)=>{
    const {  UserVillageNum,
        UserVillageName,
         UserFName,
        UserLName,
        UserPass,
        UserPhone,
        UserBirthDate,
        UserAddress,
        UserAddressDescription}=req.body()

      // const newUser= new UsersModel({UserVillageNum,
       // UserVillageName,
         //UserFName,
         //UserLName,
       // UserPass,
        //UserPhone,
        //UserBirthDate,
        //UserAddress,
       // UserAddressDescription});
        
       // newUser.save()

      const user= await UsersModel.create({ UserVillageNum,
        UserVillageName,
         UserFName,
        UserLName,
        UserPass,
        UserPhone,
        UserBirthDate,
        UserAddress,
        UserAddressDescription})
        res.json({user})
})

export default router;