import {Schema , Document,  model} from "mongoose";

interface Iuser extends Document{
    username: String,
    picture: String,
    bio: String
}

const userSchema = new Schema<Iuser>({
    username: {
        type: String,
        unique: true,
        trim: true,
        min: 8,
        max: 30
    },
    picture: {
        type: String,
        default: "default.png"
    },
    bio: {
        type: String,
        max: 120
    }
}, {
    timestamps: true,
    collection: "users",
})

userSchema.index({username: 1})

const usermodel = model<Iuser>('User', userSchema)

export default usermodel