const jwt=require('jsonwebtoken');
require('dotenv').config();

const auth=(req,res,next)=>{

    const token=req.headers.authorization?.split(" ")[1];
    jwt.verify(token,process.env.KEY, (err,result)=>{
        if(err)
            return res.status(401).send({ message: "Invalid token", error: err.message });
        else{
            req.body.userid=result.userid;
            next();
        }
    })
}
module.exports={auth};