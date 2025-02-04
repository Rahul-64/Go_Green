import mongoose from "mongoose";

const seedSchema = new mongoose.Schema({
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

const seedModel = mongoose.models.seed || mongoose.model("seed", seedSchema);

export default seedModel