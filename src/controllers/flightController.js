const FlightService = require("../service/flightService");
const createFlight = async (req,res)=>{
try{
    const flight = await FlightService.createFlight(req.body)
    res.status(200).json({
        success: true,
        message : 'Successfully created Flight',
        data: flight
    })
}catch(err){
    console.log(err);
    res.status(500).jsoon({
        success:false,
        message:'something went wrong',
    });
}
}
const getFlight = async (req,res)=>{
    try{
        const flight = await FlightService.getFlight(req.params.flightNumber);
        res.status(200).json({
            success: true,
            message : 'Successfully Fetched Flight',
            data: flight
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}
const getAllFlight = async (req,res)=>{
    try{
        const flight = await FlightService.getAllFlights();
        res.status(200).json({
            success: true,
            message : 'Successfully Fetched all Flight',
            data: flight
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}
const destroyFlight = async (req,res)=>{
    try{
        const flight = await FlightService.destroyFlight(req.query.flightNumber);
        res.status(200).json({
            success: true,
            message : 'Successfully deleted  Flight',
            data: flight
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}
module.exports={
    createFlight,
    getFlight,
    getAllFlight,
    destroyFlight
}