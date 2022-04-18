import express from 'express'

const downloadRoute=express.Router();


//CV
downloadRoute.get('/pack', (req,res)=>{
    res.download(__dirname+`dlc/padaka.pdf`)
})

export default downloadRoute;