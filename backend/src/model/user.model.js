const mongoose=require('mongoose');

const EventUserSchema=mongoose.Schema({username:String, email:String,password:String},{versionKey:false});

const EventUserModel=mongoose.model('EventUser',EventUserSchema);

module.exports={EventUserModel};