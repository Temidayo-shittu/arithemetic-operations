require('dotenv').config()
require('express-async-errors')
//express
const express = require('express')
const app = express()
//database
const connectDB = require('./db/connect')
//routes
const calculatorRouter = require('./routes/calculatorRoutes')
//Middleware
const notFoundMiddleware= require('./middleware/not-found')
const errorHandlerMiddleware= require('./middleware/error-handler')

app.use(express.json());

app.get('/api',(req,res)=>{
    res.json({
        message:'ARITHMETIC OPERATIONS',
        postmanLink: 'https://elements.getpostman.com/redirect?entityId=26636754-aab25820-f498-4104-bab1-4887f8799b8d&entityType=collection'
    })
})

app.use('/api',calculatorRouter)

const port= process.env.PORT || 5000

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
