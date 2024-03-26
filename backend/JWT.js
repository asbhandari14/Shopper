const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();
const User = require('./model/User')
const createTokens = (user)=>{
    const accessToken = jsonwebtoken.sign({
        username:user.username,
        id:user._id
    },
    process.env.ACCESS_TOKEN_SECRET
    );

    return accessToken;
}

// middleware function that runs before any request

const validateToken =async (req,res,next)=>{
    const accessToken = req.cookies["access-token"];
    console.log('cookie value',accessToken)
    if(!accessToken) return res.status(400).json({error:"User not authenticated"});
    try{
        const validToken = jsonwebtoken.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        if(validToken){
            console.log('validtoken value is' ,validToken)
            const userData = await User.findOne({username:validToken.username}).select({
                password:0
            });
            
            req.authenticated = true;
            req.user=userData;
            req.token=accessToken;
            console.log(userData);


            return next();
        }
    }catch(err){
        res.status(400).send("invalid token")
    }
    console.log('hi')
    return next();
}

module.exports = {createTokens,validateToken}