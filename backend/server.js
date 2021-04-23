import express from"express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRouter from './routes/productRoute.js'
import {notFound,errorhandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app= express()



app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use("/api/products",productRouter)


//middleware is a function that have access to req res cycles
app.use(notFound)
app.use(errorhandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})