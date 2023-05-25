import express from "express";
import { Check, practice, snehal } from "./controllers/All_Controllers.js";
import morgan from "morgan";
import router from "./routes/userRoutes.js";
import mongoose from "mongoose";

const app=express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);

app.get('/snehal',snehal);
app.get('/practice',practice);
app.get('/check',Check);

mongoose.connect('mongodb+srv://Snehal:Snehal1234@mern-todo.va7rcii.mongodb.net/')
.then(()=>console.log("Database connected successfully"))
.catch((error)=>console.log(error,"error here"))

app.listen(8001,()=>console.log("working on port 8001"));