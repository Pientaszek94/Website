import express from 'express'

const downloadRoute=express.Router();


//CV
downloadRoute.get('/', (req,res)=>{
    try {
        const file = `${__dirname}/client/build/documents/Resume.pdf`;
        res.download(file);
        console.log('here');
      } catch (err) {
        console.log(err);
      }
})

export default downloadRoute;