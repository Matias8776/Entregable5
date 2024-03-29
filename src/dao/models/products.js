import mongoose from "mongoose";

const productCollection = "products";
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    thumbnails: {
        type: [],
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
});

const productsModel = mongoose.model(productCollection, productSchema);

export default productsModel;
