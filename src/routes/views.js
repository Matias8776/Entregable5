import ProductManager from "../dao/mongoDb/ProductManager.js";
import { Router } from "express";
import __dirname from "../utils.js";

const router = Router();

const productManager = new ProductManager();

router.get("/", async (req, res) => {
    const products = await productManager.getProducts();
    res.render("home", {
        products,
        style: "home.css",
        title: "Ecommerce - Productos",
    });
});

router.get("/realtimeproducts", async (req, res) => {
    res.render("realTimeProducts", {
        style: "realTimeProducts.css",
        title: "Ecommerce - Productos en tiempo real",
    });
});

router.get("/chat", (req, res) => {
    res.render("chat", {
        style: "chat.css",
        title: "Ecommerce - Chat",
    });
});

export default router;
