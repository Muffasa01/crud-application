import express ,{ Express } from "express";
import user_router from "./routes/user.route";
import dotenv from 'dotenv'
import connectDb from "./config/db.cofig";

dotenv.config({
    path: "./config/.env",
})
const app: Express = express()

app.use(express.json())

app.use("/crud", user_router)

app.listen(3000, ()=> {
    console.log("app listen on ", 3000)
    connectDb()
})
