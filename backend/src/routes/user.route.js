const express=require('express');
const { EventUserModel } = require('../model/user.model');
require('dotenv').config();
const userRouter=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
userRouter.post('/register', async (req,res)=>{
    const {username, email, password}=req.body;
    const isUserExist=await EventUserModel.findOne({email});
    if(!isUserExist)
    {
        bcrypt.hash(password, 5, async (err, result)=>
        {
            if(err)
                res.send(err);
            else
            {
                const user=await new EventUserModel({username,email, password:result});
                await user.save();
                res.status(200).send({message:"Registration successfull"})
            }
        })
    }
    else
        res.send("You are already registered!Please login");
})




userRouter.post('/login', async (req,res)=>{
    const { email,password}=req.body;
    const isUserExist=await EventUserModel.findOne({email});
    if(isUserExist)
    {
        bcrypt.compare(password, isUserExist.password, async (err,result)=>
        {
            if(err)
                return res.status(500).send({ error: "Internal server error" });
            // else
            // {
            //     jwt.sign(req.body, process.env.KEY,(err,token)=>
            //     {
            //         if(token)
            //             res.json({token:token});
            //         else
            //             res.send(err);
            //     })
            // }

            if (result) {
                const payload = { userid: isUserExist._id, email: isUserExist.email };  // Do not include the password
                jwt.sign(payload, process.env.KEY, { expiresIn: '1h' }, (err, token) => {
                    if (err) {
                        return res.status(500).send({ error: "Failed to generate token" });
                    }
                    res.json({ token });
                });
            } else {
                res.status(401).send({ message: "Invalid password" });
            }
        })
    }
    else
        res.send("You are not registered user, Please register");
})

module.exports={userRouter};