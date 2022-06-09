const AirlineService = require("../service/airlineService");
const createAirline = async (req,res)=>{
try{
    const airlinne = await AirlineService.createAirline(req.body)
    res.status(200).json({
        success: true,
        message : 'Successfully created airline',
        data: airlinne
    })
}catch(err){
    console.log(err);
    res.status(500).jsoon({
        success:false,
        message:'something went wrong',
    });
}
}
const getAirline = async (req,res)=>{
    try{
        const airline = await AirlineService.getAirline(req.params.name);
        res.status(200).json({
            success: true,
            message : 'Successfully Fetched airline',
            data: airline
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}
const getAllAirline = async (req,res)=>{
    try{
        const airlinnes = await AirlineService.getAllAirline();
        res.status(200).json({
            success: true,
            message : 'Successfully Fetched all airline',
            data: airlinnes
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}
const destroyAirline = async (req,res)=>{
    try{
        const airlinnes = await AirlineService.destroyAirline(req.query.name);
        res.status(200).json({
            success: true,
            message : 'Successfully deleted  airline',
            data: airlinnes
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
    createAirline,
    getAirline,
    getAllAirline,
    destroyAirline
}