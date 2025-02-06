const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 9000;
app.get('/',(req,res)=>{
    res.send("welcome to the server")
})
app.listen(PORT , ()=>{
    console.log(`server started at port ${PORT}`)
})
