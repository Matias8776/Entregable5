import { Router } from "express";
import CartManager from "../dao/mongoDb/CartManager.js";
import ProductManager from "../dao/mongoDb/ProductManager.js";

const router = Router();

const cartManager = new CartManager();
const productManager = new ProductManager();

router.post("/", async (req, res) => {
    const cart = await cartManager.addCart();

    res.send({ status: "success", message: `Creado con el id: ${cart._id}` });
});

router.get("/", async (req, res) => {
    const carts = await cartManager.getCarts();

    if (!carts) {
        res.send({
            status: "error",
            message: `No existen carritos`,
        });
        return;
    }

    res.send(carts);
});

router.get("/:cid", async (req, res) => {
    const cid = req.params.cid;
    const cart = await cartManager.getCartById(cid);

    if (!cart) {
        res.send({
            status: "error",
            message: `No existe el carrito con el id ${cid}`,
        });
        return;
    }

    res.send(cart.products);
});

router.post("/:cid/product/:pid", async (req, res) => {
    const pid = req.params.pid;
    const cid = req.params.cid;
    const product = await productManager.getProductById(pid);
    const cart = await cartManager.getCartById(cid);

    if (!product) {
        res.send({
            status: "error",
            message: `No existe el producto con el id ${pid}`,
        });
        return;
    }

    if (!cart) {
        res.send({
            status: "error",
            message: `No existe el carrito con el id ${cid}`,
        });
        return;
    }
    await cartManager.addProductToCart(cid, pid);

    res.send({ status: "success" });
});

export default router;
