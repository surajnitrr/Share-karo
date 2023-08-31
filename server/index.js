import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBconnection from './database/db.js';



const app = express();
app.use(cors());


app.use('/',router);


const port = 7000;

DBconnection();

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('express server is running on :',port);
});