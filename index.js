import express from "express";
import { practice, snehal } from "./routes/controllers/All_Controllers.js";
import morgan from "morgan";

const app=express();
app.use(morgan('dev'));
app.get('/snehal',snehal);
app.get('/practice',practice);

app.listen(8001,()=>console.log("working on port 8001"));