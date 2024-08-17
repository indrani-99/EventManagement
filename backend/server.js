const express=require('express');
const { connectionWithDB } = require('./src/config/db');
const { userRouter } = require('./src/routes/user.route');
const { eventRouter } = require('./src/routes/event.route');
require('dotenv').config();
const app=express();

const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use('/user',userRouter);
app.use('/event',eventRouter)
app.get('/', (req,res)=>{
    res.send("This is home route");
})

app.listen(process.env.PORT, async()=>{
    await connectionWithDB();
    console.log(`Server is running at ${process.env.PORT}`);
})