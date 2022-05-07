
const UserDetails=require("../models/userModel");
const express=require("express");
const app=express();
app.post("/login", (req,res)=>{
    const {email,password} = req.body;
    UserDetails.findOne({email:email} , (err , user) =>{
        if(user){
            if(password === user.password){
                res.send({message:"login Successfull" ,user:user})
            }
            else{
                res.send({message:"password didnt matched"})
            }
        }
        else{
            res.send({message:"user not registered"});
        }
    })
});

app.post("/register", (req,res)=>{
   const {first_name , last_name , email , password , dob, number} = req.body;
   UserDetails.findOne({email:email}, (err,user) =>{
       if(user){
           res.send({message:"user already registered"})
       }
       else{
        const user = new UserDetails({
            first_name,
            last_name,
            email,
            password,
            dob,
            number
        })
        user.save(err =>{
            if(err){
                res.send(err)
            }
            else{
                res.send( {message:"succesfully added"})
            }
        })
       }
   })
 
});


app.get("/", async (req, res) => {
    try {
      const users = await UserDetails.find().lean().exec();
  
      return res.send(users);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

   module.exports =app