import express ,{ Express } from "express";
import user_router from "./routes/user.route";
import dotenv from 'dotenv'

dotenv.config()
const app: Express = express()

app.use(express.json())

app.use("/crud", user_router)

app.listen(process.env.PORT, ()=> {
    console.log("app listen on ", process.env.PORT)
})
