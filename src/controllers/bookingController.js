
const BookingService = require("../service/bookingService");

const createBooking = async (req,res)=>{
try{
    const booking = await BookingService.createBooking(req.body)
    res.status(200).json({
        success: true,
        message : 'Booking Successfully created',
        data: booking
    })
}catch(err){
    console.log(err);
    res.status(500).jsoon({
        success:false,
        message:'something went wrong',
    });
}
}
const getboardingPass = async (req,res)=>{
    try{
        const pass = await BookingService.getboardingPass(req.params.id);
        res.status(200).json({
            success: true,
            message : 'Successfully fatched pass',
            data: pass
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}

const cancelBooking = async (req,res)=>{
    try{
        const boking = await BookingService.cancelBooking(req.params.id);
        res.status(200).json({
            success: true,
            message : 'Successfully cancelled Booking',
            data: boking
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
    createBooking,
    getboardingPass,
    cancelBooking
}