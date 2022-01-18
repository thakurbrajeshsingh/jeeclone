import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors'
// components
import Connection from "./database/db.js";
import Routes from './routes/routes.js'
dotenv.config();

const app = express();



app.use(bodyParser.json({extended:true}));    //req.body
app.use(bodyParser.urlencoded({extended:true}));  
app.use(cors());
app.use('/',Routes)

const PORT = 8000;


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

app.listen(PORT, () => console.log(`Server Running Successfully on PORT ${PORT}`));


