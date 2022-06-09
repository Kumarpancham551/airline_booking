const mongoose = require("mongoose");

const airlineSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    website:{
        type:String
    }
},{timestamps:true})

const Airline = new mongoose.model('Airline',airlineSchema);

module.exports = Airline;