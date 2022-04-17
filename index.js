import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path';
import  postRoutes  from './routes/posts.js';
import downloadRoute from './routes/download.js';
import usersRoutes from './routes/users.js';

const app=express();

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}))

app.use(cors());

app.use('/posts', postRoutes)
app.use('/users', usersRoutes)
app.use('/download', downloadRoute)

app.get('/', (req,res)=>{
    res.send('Yup. Now you are looking at servers main route')
})

//Serve static assets if in production
if(process.env.NODE_ENV==='production')
{
    //Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const CONNECTION_URL='mongodb+srv://pawel123:Kaszka123@cluster0.k46cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT=process.env.PORT||5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology: true})
.then(app.listen(PORT, ()=>console.log(`THE PORT ${PORT} IS RUNNING!`))).catch((error)=>console.log("YEP...WE ARE DOOMED...and here is what it caused:  ", error.message));

