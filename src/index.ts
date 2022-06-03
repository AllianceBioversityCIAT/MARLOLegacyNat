import express from "express";
import cors from "cors";
import Routes from "./routes";
import 'reflect-metadata';

const app = express();
app.set('port',3000)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", Routes);

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port')); 
    
})

module.exports = app;