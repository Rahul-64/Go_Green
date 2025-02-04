import mongoose from "mongoose";
import { type } from "os";
import { object } from "zod";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    userimage : {
        type : String,
        required : true
    },
    cartData: {
        type: Object,
        default: {}
    }
}, {minimize: false , timestamps : true})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel