import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    bestSeller: {
        type: Boolean
    },
    Date:{
        type: Number,
        
    }
}, {timestamps : true})

const plantModel = mongoose.models.plant || mongoose.model("plant", plantSchema);

export default plantModel