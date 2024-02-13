const express=require("express")
const body=require("body-parser")
const {Restaurant, User}=require("./schema.cjs")
const mongoose=require("mongoose")
const app=express()
app.use(body.json())
const port=process.env.PORT || 1234
app.get("/",(req,res)=>{
    res.send("There is way, there is way!")
})
const c=require("cors")
app.use(c())
async function connectToDb()
{
    try{
        await mongoose.connect("mongodb+srv://chandhrakiransv:12345@chandhrakiran.4eo6wur.mongodb.net/Swigy?retryWrites=true&w=majority")
        app.listen(port,()=>
        {
        console.log(`i'm listening port no ${port}`)
        })
    }
    catch(error){
        console.log(error)
        console.log("it couldn't estsablishing data")
    }
}
connectToDb()
app.post("/addrestaurant",async (req,res)=>{
    try{
        console.log(req.body)
        await Restaurant.deleteOne({
             "name":req.body.name
        })
        res.status(200).json({
            "status":"sucess",
            "message":"restaurant deleted"
        })
    }
    catch(error){
        
        res.status(500).json({
            "status":"cancelled",
            "error":error
        })
    }
})
app.get("/show",async (req,res)=>{
    try{    
       const data=await Restaurant.find()
       res.status(200).json({data})
        }
    
    catch(error){
        res.status(500).send("couldn't show")
    }
})
app.post("/showuser",async (req,res)=>{
    try{
        const data = await Restaurant.findOne({
            "name":req.body.areaName
        })
        
        if(data){
            res.status(200).json({
                "status":"ssssss"
            })
        }
        else{
            res.status(401).json({
                "status":"nnnnnnn "
            })
        }
    }
    catch(error){
        res.status(500).json({
            "status":"not valid user"
        })
    }
})
app.post("/createnewuser",async (req,res)=>{
   try{
    await User.create({
        "userName":req.body.userName,
        "email":req.body.email,
        "passWord":req.body.passWord,
        "contact":req.body.contact
    })
    res.status(201).json({
        "stauts":"sucess"
    })
   }
   catch(error){
    res.status(500).json({
         "error":error
    })
   }
})
// app.post("/validuser",async (req,res)=>{
//     try{
//         const user=await User.findOne({
//             "email":req.body.email,
//             "passWord": req.body.passWord
//         })
//         if(user){
//             res.status(200).json({
//                 "status":"valid user"
//             })
//         }
//         else{
//             res.status(401).json({
//                 "status":"invalid user"
//             })
//         }

//     }
//     catch(error){
//         res.status(500).json({
//             "status":"internal server error"
//         })
//     }

// })