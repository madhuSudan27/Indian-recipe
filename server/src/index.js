import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js'
import {recipesRouter } from "./routes/recipes.js";
// to generate api 
const app=express();
// to convert data into json
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);
mongoose.connect("mongodb+srv://madhu27:madhu27@recipes.i7wxh8p.mongodb.net/recipes?retryWrites=true&w=majority");

app.listen(3001,()=>console.log('SERVER STARTED'));

