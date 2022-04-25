import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import compression from 'compression'

import  postRoutes  from './routes/posts.js';
import downloadRoute from './routes/download.js';
import usersRoutes from './routes/users.js';
import path from 'path';
const app=express();

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}))

app.use(cors());

app.use('/api/posts', postRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/download', downloadRoute)

app.get('/api', (req,res)=>{
    res.send('Yup. Now you are looking at servers main route')
})



const PORT=process.env.PORT||5000;

// //Serve static assets if in production


    app.use(express.static('client/build'));


    app.get("*", function (request, response) {
        response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
      });
    
   



mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://pawel123:pwl1994@cluster0.k46cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true})
.then(app.listen(PORT, ()=>console.log(`THE PORT ${PORT} IS RUNNING!`))).catch((error)=>console.log("YEP...WE ARE DOOMED...and here is what it caused:  ", error.message));

