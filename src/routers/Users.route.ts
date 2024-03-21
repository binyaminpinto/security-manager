import { Router } from "express";
import {createUser,getUserByPhone,updateUser, deleteUserById,readAllUsers,readSingleUser} from "../controllers/Users.controller";

const UsersRouter = Router()

UsersRouter.post("/",createUser) 
UsersRouter.get("/",getUserByPhone) 
UsersRouter.patch("/",updateUser) 
UsersRouter.delete("/",deleteUserById)
UsersRouter.get("/",readAllUsers)
UsersRouter.get("/",readSingleUser) 

export default UsersRouter