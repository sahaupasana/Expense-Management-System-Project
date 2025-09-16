const mongoose=require('mongoose')

//schema design
const userSchema= new mongoose.Schema({
name:{
    type:String,
    required:[true,"Name is required"]
},
email:{
    type:String,
    unique:true,
    required:[true,"Email is required and shoulbe be unique"]
},
password:{
    type:String,
    required:[true,"Password is rrquired"]
},
},
{timestamps:true})
//export 
const userModel = mongoose.model('users',userSchema)
module.exports =userModel