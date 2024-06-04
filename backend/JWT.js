const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();
const User = require('./models/UsersInfoModel');
const Admins = require('./models/AdminSchema')
const cookieParser = require("cookie-parser");
const createTokens = (user)=>{
    const accessToken = jsonwebtoken.sign({
        email:user.email,
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
            const userData = await User.findOne({email:validToken.email}).select({
                password:0
            });
            console.log('userdata is',userData)
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

const validateAdmin =async (req,res,next)=>{
    const accessToken = req.cookies["access-token"];
    console.log('cookie value',accessToken)
    if(!accessToken) return res.status(400).json({error:"User not authenticated"});
    try{
        const validToken = jsonwebtoken.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        if(validToken){
            console.log('validtoken value is' ,validToken)
            const userData = await Admins.findOne({email:validToken.email}).select({
                password:0
            });
            console.log('userdata is',userData)
            req.authenticated = true;
            req.admin=userData;
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

module.exports = {createTokens,validateToken,validateAdmin}