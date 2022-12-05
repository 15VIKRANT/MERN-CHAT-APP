const express = require("express");
const app = express();
const chats = require('./src/data');
const cors = require('cors')
app.use(cors());
app.get('/api/chat', async(req,res)=>{
   res.status(202).send(chats)
})



app.listen(5000, (req,res)=>{
    console.log("listening to port 5000.")
})