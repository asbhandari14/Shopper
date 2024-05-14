const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const MyProducts = require('./models/ProductsModel')
const cookieParser = require("cookie-parser")
const MyUsers = require('./models/UsersInfoModel')
const Orders= require('./models/OrderSchema')
const {createTokens,validateToken} = require('./JWT')
const app = express();
const bcrypt = require('bcrypt')
const UsersInfoModel = require('./models/UsersInfoModel')
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
// using cors
const DB='mongodb+srv://yoab100203:ua7QvbAqz79ukeXP@cluster0.urt4zun.mongodb.net/Trial?retryWrites=true&w=majority'; 
mongoose.connect(DB).then(()=>console.log('database connected')).catch((e)=>console.log(e))
app.use(express.json());
// login api


app.get('/',async (req,res)=>{
    // try{
    //     const Users = await MyUsers.find({});
    //     return res.status(200).json({
    //         count:Users.length,
    //         data:Users
    //     })
    // }catch(e){
    //     console.log(e);
    //     res.status(500).send({message:e.message})
    // }
    res.send('HELLO WORLD')
    
})
app.post('/registration',async (req,res)=>{
    console.log('registratio hit')
    const {email,name,password}= req.body;
    const userexists = await MyUsers.findOne({email:email});
    if(!(req.body.email&&req.body.password&&req.body.name)){
        return res.status(400).json(`enter all values`)
    }else if(userexists){
            return res.status(400).json(`user already exists`)
        }
        else{
            bcrypt.hash(password, 10).then((hash) => {
                UsersInfoModel.create({
                    email: email,
                    name:name,
                    password: hash
                }).then(() =>{
                    res.status(200).json("User Registered")
                    console.log(email,password,name)
                } ).catch((err) => {
                    if (err) {
                        res.status(400).json({ error: err })
                    }
                })
            });
        }
        
    })
    app.post('/Login',async (req,res)=>{
        const {email,password}= req.body;
        console.log('login hit')
        if(!req.body.email||
            !req.body.password
            ){
                return res.status(400).json(`Enter email and password`)
                
            }
            
            MyUsers.findOne({email:email}).then((user)=>{
                if(user){
                    console.log('userfound')
                    bcrypt.compare(password,user.password).then((match)=>{
                        if(!match){
                            res.status(400).send("wrong password")
                        }
                        else{
                            console.log('password match')
                            const accessToken=createTokens(user)
                            res.cookie("access-token",accessToken,{
                                maxAge:60*60*24*30*1000,
                                httpOnly:true
                            });
                            res.status(200).send('Logged in')
                        }
                    })
                }
                else{
                    return res.status(200).json(`User not found here `)
                    
                }
            }
            ).catch((e)=>{
                return res.status(400).json(`Enter right email`)
                console.log(e)
                
            })
            
        })

        app.get('/Profile',validateToken,(req,res)=>{
            res.json(req.user)
        })

        // products api

        // Get all Products
        app.get('/products',async (req,res)=>{
            try{
                const Products = await MyProducts.find({});
                return res.status(200).json({
                    count:Products.length,
                    data:Products
                })
            }catch(e){
                console.log(e);
                res.status(500).send({message:e.message})
            }            
        })

        app.get('/productStatus/:productid', async (req,res)=>{
            const id = req.params;
            res.json({id})
        })
        // Create a new Product
        app.post('/products',async (req,res)=>{
    
    
            if(!req.body.email||
                !req.body.password
                ){
                    return res.status(400).json(`enter all values`)
                }
                async function createUser(){
                    try{
                        const myProduct = new MyProducts({ProductName:req.body.ProductName,Price:req.body.Price,discountedPrice:req.body.discountedPrice,productDescription:req.body.productDescription,
                            sizes:req.body.sizes,tags:req.body.tags
                        }) 
                        await myProduct.save();
                        console.log(myProduct)
                    }catch(e){
                        console.log(e)
                    }
                }
                createUser()
                return res.status(200).send(`Product created`)
                
            })

            // Delete a Product

            app.delete('/products/:id',async (req,res)=>{
                try{
                        
                        const {id}=req.params;
                        const result = await MyProducts.findByIdAndDelete(id);
                        if(!result){
                            return res.status(400).send('Product not found')
                            
                        }
                        return res.status(200).send('Product Deleted successfully')
                        
            }catch(e){
                
            }
        })
        
        
        app.get('/createorder',async (req,res)=>{
            try{
                const myorder = {
                    OrderId:"34512",
                    ProductId:"12345433",
                    CustomerEmail:"amanbisht26@gmail.com",
                    SellingPrice:"799",
                    Size:"XL",
                    AmountBought:2
                }

                const order = Orders(myorder)
                await order.save();
                console.log('order saved',order)
                res.status(200).json({order})
            }catch(e){
                console.log(e)
                res.status(500).send({message:e.message})


            }
        })

        app.listen(5000,()=>{

    
    console.log(`App is listening at 5000`)
})




