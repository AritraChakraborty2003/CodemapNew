/*------------ IMPORTS ------------*/
import express from 'express';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import {fileURLToPath} from 'url'
import path from 'path';
import { connectDB } from './configs/mongodb.config.js';
import Admin_route from './routers/admin.routes.js'
import Receipt_route from './routers/receipt_sender.routes.js';
configDotenv();

/*-------- EXPRESS APP --------*/
const app = express();

/*--------- ADDING DIRECTORY ---------*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname,'public')))

/*-------- MIDDLEWARES --------*/
app.use(express.json());
app.use(cookieParser());

/*----------- ROUTES -----------*/
app.get('/api/v1',(req,res)=>{
    res.send('From Backend');
});
app.use('/api/v1/admin',Admin_route);
app.use('/api/v1/receipt_sender',Receipt_route)

/*------------- SERVER RUNS -------------*/
const PORT = process.env.PORT || 5000;
app.listen(PORT,async ()=>{
    await connectDB();
    console.log(`Server started at ${PORT}`);
});









