import cartsModel from "../models/carts.js";

export default class CartManager {
    getCarts = async () => {
        try {
            const carts = await cartsModel.find();
            return carts;
        } catch (err) {
            console.error(err.message);
            return [];
        }
    };

    getCartById = async (cartId) => {
        try {
            const cart = await cartsModel.findById(cartId);
            return cart;
        } catch (err) {
            console.error(err.message);
            return err;
        }
    };

    addCart = async (products) => {
        try {
            let cartData = {};
            if (products && products.length > 0) {
                cartData.products = products;
            }

            const cart = await cartsModel.create(cartData);
            return cart;
        } catch (err) {
            console.error(err.message);
            return err;
        }
    };

    addProductToCart = async (cid, pid) => {
        try {
            const data = { _id: cid, "products._id": pid };
            const cart = await cartsModel.findById(cid);
            const product = cart.products.some((product) =>
                product._id.equals(pid)
            );

            if (product) {
                const update = {
                    $inc: { "products.$.quantity": 1 },
                };
                await cartsModel.updateOne(data, update);
            } else {
                const update = {
                    $push: {
                        products: { _id: pid, quantity: 1 },
                    },
                };
                await cartsModel.updateOne({ _id: cid }, update);
            }

            return await cartsModel.findById(cid);
        } catch (err) {
            console.error(err.message);
            return err;
        }
    };
}
