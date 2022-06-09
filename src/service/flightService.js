
const Flight = require("../models/flight");


const createFlight = async (data)=>{
 try{
  const newFlight={
    departureAirport:data.departureAirport,
    arivalAirport:data.arivalAirport,
    duration:data.duration,
    airline:data.airline,
    flightDate:data.flightDate,
    departueTime:data.departueTime,
    arrivalTime:data.arrivalTime,
    flightNumber:data.flightNumber,
    price:data.price,
    boardingGate:data.boardingGate,
    airline:data.airlineId
  }
  const response =await new Flight(newFlight).save();
  return response
 }catch(err){
    console.log(err);
 }
}
const updateFlight = async (data)=>{
  try{
    const response = await Flight.updateOne({flightNumber:data.flightNumber},data);
    return response;
  }catch(err){
    console.log(err);
  }
    
}
const destroyFlight = async (flightNumber)=>{
    try{
      const response = await Flight.findOneAndDelete({flightNumber:flightNumber})
      return response;
    }catch(err){
      console.log(err);
    }
}
const getFlight = async (flightNumber)=>{
  try{
    const response = await Flight.findOne({flightNumber:flightNumber});
    return response;
  }catch(err){
    console.log(err);
  }
    
}
const getAllFlights =async ()=>{
  try{
    const response = await Flight.find();
    return response;
  }catch(err){
    console.log(err);
  }
}

module.exports={
    createFlight,
    updateFlight,
    destroyFlight,
    getFlight,
    getAllFlights
}