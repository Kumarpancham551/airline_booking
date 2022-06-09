const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    departureAirport:{
        typpe:String,
        required:true
    },
    arivalAirport:{
        typpe:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    airline:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Airline'
    },
    flightDate:{
        type:Date,
        default:Date.now
    },
    departueTime:{
        type:TimeStamp
    },
    arrivalTime:{
        type:TimeStamp
    },
    flightNumber:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true});

const flightModel = new mongoose.model('Flight', flightSchema);
module.exports = flightModel;

