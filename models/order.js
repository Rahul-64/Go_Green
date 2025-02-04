import mongoose from "mongoose";
import { array } from "zod";

const orderSchema = new mongoose.Schema({
    userId : {
        type : String,
        reuired: true
    },
    items : {
        type: Array,
        required: true
    },
    amount : {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status : {
        type: String,
        reuired: true,
        default: 'Orders placed successfully'
    },
    paymentMethod : {
        type: String,
        reuired: true,
    },
    payment : {
        type: Boolean,
        reuired: true,
        default: 'false'
    }
} , {timestamps : true})

const orderModel = mongoose.model.order || mongoose.model('order', orderSchema)
export default orderModel;