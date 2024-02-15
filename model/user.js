const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
    }
})
const userModel= mongoose.model('allUsers',userSchema );
module.exports = userModel;