
const ReviewService = require("../service/reviewService");
const createReview = async (req,res)=>{
try{
    const review = await ReviewService.createReview(req.body)
    res.status(200).json({
        success: true,
        message : 'Successfully created review',
        data: review
    })
}catch(err){
    console.log(err);
    res.status(500).jsoon({
        success:false,
        message:'something went wrong',
    });
}
}
const getReview = async (req,res)=>{
    try{
        const review = await ReviewService.getReview(req.params.userId, req.params.flightId);
        res.status(200).json({
            success: true,
            message : 'Successfully Fetched Review',
            data: review
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}
const getAllReview = async (req,res)=>{
    try{
        const Reviews = await ReviewService.getAllReview(req.params.flightId);
        res.status(200).json({
            success: true,
            message : 'Successfully Fetched all Review',
            data: Reviews
        })
    }catch(err){
        console.log(err);
        res.status(500).jsoon({
            success:false,
            message:'something went wrong',
        });
    }
}
const destroyReview = async (req,res)=>{
    try{
        const review = await ReviewService.destroyReview(req.params.id);
        res.status(200).json({
            success: true,
            message : 'Successfully deleted  Review',
            data: review
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
    createReview,
    getReview,
    getAllReview,
    destroyReview
}