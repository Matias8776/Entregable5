import productsModel from "../models/products.js";

export default class ProductManager {
    getProducts = async () => {
        try {
            return await productsModel.find().lean();
        } catch (err) {
            return err;
        }
    };

    getProductById = async (id) => {
        try {
            return await productsModel.findById(id);
        } catch (err) {
            return { error: err.message };
        }
    };

    addProduct = async (product) => {
        const result = {
            success: false,
        };
        if (typeof product.status === "string") product.status = true;
        try {
            await productsModel.create(product);
            result.success = true;
            return result;
        } catch (err) {
            return err;
        }
    };

    updateProduct = async (id, product) => {
        try {
            return await productsModel.findByIdAndUpdate(id, { $set: product });
        } catch (err) {
            return err;
        }
    };

    deleteProduct = async (id) => {
        try {
            return await productsModel.findByIdAndDelete(id);
        } catch (err) {
            return err;
        }
    };
}
