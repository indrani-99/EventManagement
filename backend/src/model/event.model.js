const mongoose=require('mongoose');

const EventSchema=mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventUser'
      }
    ]
  },{versionKey:false});

const EventModel=mongoose.model('EventApp',EventSchema);

module.exports={EventModel};

