import express from 'express'
import mongo from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import ProductsRouter from './routers/Products.js'
dotenv.config()


const app = express()
const accessKey = process.env.ACCESSKEY
const dbKey = process.env.DBACCESS

app.use(cors())
app.use(express.json())


const APImethods={
    Middleware:(req,res,next)=>{
        const key = req.headers['x-api-key']
        if(!key){
            res.status(404).json({message:'Você não tem permisão para acessar essa API',status:false})
            return
        }
        if(key !== accessKey){
            res.status(403).json({message:`A sua chave não está correta: ${key}`,status:false})
            return
        }
        next()
    },
    ConnectDB:()=>{mongo.connect(dbKey)
    .then(()=>{
        console.log('DB connect')
    }).catch((err)=>{
        console.log('Error for connect db',err)
    })}
}

APImethods.ConnectDB()
app.use(APImethods.Middleware)
app.use(ProductsRouter)
app.listen(2000,()=>{console.log('http://localhost:2000')})