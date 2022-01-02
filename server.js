const express = require("express")
const app = express()
const connectDB = require("./config/db")
require('dotenv').config({ path: './config/.env' });
connectDB()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use("/api",require('./routes/urls'))
app.use("/",require('./routes/index'))
app.get("/",(req,res)=>{
    res.send("<h1>this is a custom url shortener</h1>")
})

app.listen(PORT,()=>console.log(`app running on port ${PORT}`))