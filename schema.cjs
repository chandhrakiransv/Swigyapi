const mongoose=require("mongoose")
const restaurantsSchema=new mongoose.Schema({
    areaName:{
        type:String
    },
    avgRating:{
        type:Number
    },
    costForTwo:{
        type:String
    },
    cuisines:{
        type:Array
    },
    name:{
        type:String
    }
},{versionKey:false})
const Restaurant=mongoose.model("restaurantList",restaurantsSchema)

const userSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    contact:{
        type:Number
    },
    email:{
        type:String
    },
    passWord:{
        type:String
    }
},{versionKey:false})
const User=mongoose.model("userContent",userSchema)
module.exports={Restaurant, User}
