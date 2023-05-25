import express from "express";
import { login, register } from "../controllers/user_controllers.js";
import { addProduct } from "../controllers/product_controllers.js";

var router=express.Router();
router.get('/login',login);
router.get('/register',register);
router.post('/add_product',addProduct);

export default router;