const express= require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectdb = require('./config/connectdb')

//congig the .dot env file 
dotenv.config()

//database connect
connectdb()
//rest object 
const app=express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes 
//user
app.use('/api/v1/users',require('./routes/userRoute'))
//transactionroutes 
app.use('/api/v1/transactions',require('./routes/transactionRoutes'))
//port 
const PORT = process.env.PORT || 8080 ;

//listen server 
app.listen(PORT , () =>{
console.log(`server running on port ${PORT}`)
})