const express=require('express');
const { auth } = require('../middleware/auth.middleware');
const { EventModel } = require('../model/event.model');
const eventRouter=express.Router();


eventRouter.get('/', async (req,res)=>{
  try{
    let allEvent=await EventModel.find();
    res.send(allEvent);
  }
  catch(err){
    console.log(err);
  }
})


eventRouter.post('/create',auth,async (req,res)=>{
  try{
    let event=await new EventModel(req.body);
    await event.save();
  }
 catch(err){
  res.status(500).send({ message: 'Failed to create event', error: err.message });
 }
})

eventRouter.patch('/update/:id',auth,async (req,res)=>{
  try{
    let eventid=req.params.id;
    let data=req.body;
    const updatedEvent=await EventModel.findByIdAndUpdate(eventid,data);
  
    if (!updatedEvent) 
      return res.status(404).send({message:'Event not found' });
    
    res.status(200).send({ message:'Event updated successfully', updatedEvent });
  }
  catch(err){
    res.status(500).send({ message: 'Failed to update event', error: err.message });
  }
})

eventRouter.delete('/delete/:id',auth,async (req,res)=>{
  try{
    let eventid=req.params.id;
    const deleteEvent=await EventModel.findByIdAndDelete(eventid);
    if(!deleteEvent)
      res.status(500).send({message:'Event not found',error: err.message });
    else
      res.status(200).send({message:'Event deleted successfully'});  
  }
  catch(err){
    res.status(500).send({message:'Unable to delete the event',error:err.message});
  }
})


eventRouter.patch('/user/participant/:id',auth, async (req,res)=>{
try{
  let eventid=req.params.id;
  let userid = req.body.userid;
  let updatedEvent=await EventModel.findByIdAndUpdate(eventid, {$push:{participants:userid}},{ new: true });
  if (!updatedEvent)
    return res.status(404).send({message:'Event not found'});
  res.status(200).send({message:'Participant added successfully',updatedEvent});
}
catch(err){
  res.status(500).send({ message:'Failed to add participant', error: err.message});
}
  
})

module.exports={eventRouter};