import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

 const  connectDb = async () => {
   
        // await mongoose.connect(process.env.DB_URL)
        await mongoose.connect('mongodb+srv://rendanimuffasa:Mukona17@cluster0.jmcoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(res => {
            console.log("db established")
        })
        .catch(error => {
            console.log("error db connection: ", error)
        })
    
}


export default connectDb