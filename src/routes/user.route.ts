import { Router } from "express";
import { createUser, editUser, deleteUser, listUsers, listUser } from "../controllers/user.controller";
import upload from "../middlewares/upload.middleware";


const user_router: Router = Router()

user_router.post("/create-user",upload.single("picture"), createUser)

user_router.patch("/edit-user/:id", editUser)

user_router.delete("/delete-user/:id", deleteUser)

user_router.get('/get-user/:id', listUser)

user_router.get('/get-users', listUsers)

export default user_router