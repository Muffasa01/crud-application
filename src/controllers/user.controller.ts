import usermodel from "../models/user.model"
import { Request, Response } from "express"

export const  createUser = async (req: Request, res: Response) => {
    const {username, picture, bio} = req.body
    if(!username || !picture || !bio) {
        res.status(400).json({
            success: false,
            message: "fill all the fields"
        })
    }

    const user = await usermodel.findOne({username: username})

    if(user){
        res.status(400).json({
            success: false,
            message: "user exists"
        })
    }

    const newUser  = new usermodel({
        username,
        picture,
        bio
    })

    await newUser.save()
    
    res.status(200).json({
        success: true,
        message: "new user added",
        user_details: {
            newUser
        }
    })
}

export const editUser = async (req: Request, res: Response) => {
    const {username, picture, bio} = req.body
    if(!username || !picture || !bio) {
        res.status(400).json({
            success: false,
            message: "fill all the fields"
        })
    }

    const user = await usermodel.findOneAndUpdate({username: username})

    if(!user){
        res.status(400).json({
            success: false,
            message: "user does not  exists"
        })
    }

    const newUser  = new usermodel({
        username,
        picture,
        bio
    })

    await newUser.save()

    res.status(200).json({
        success: true,
        message: "user updated",
        user_details: {
            newUser
        }
    })
}

export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params
    if(!id){
        res.status(400).json({
            success: false,
            message: "user id does not  exists"
        })
    }

    const user = await usermodel.findOneAndDelete({_id: id})
    if(!user){
        res.status(400).json({
            success: false,
            message: "user does not  exists"
        })
    }

    res.status(200).json({
        success: true,
        message: "user deleted",
    })
    
}

export const listUser = async (req: Request, res: Response) => {
    const {id} = req.params
    if(!id){
        res.status(400).json({
            success: false,
            message: "user id does not  exists"
        })
    }

    const user = await usermodel.findOne({_id: id})
    if(!user){
        res.status(400).json({
            success: false,
            message: "user does not  exists"
        })
    }

    res.status(200).json({
        success: true,
        user
    })
}

export const listUsers = async (req: Request, res: Response) => {
    const users = await usermodel.find({})

    if(!users){
        res.status(400).json({
            success: false,
            message: "no users available"
        })
    }

    res.status(200).json({
        success: true,
        users: {
            users
        }
    })
}