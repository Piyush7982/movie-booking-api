const { INTEGER } = require("sequelize")
const {ShowService}= require("../services")
const {SuccessResponse,ErrorResponse}= require("../utils/common")

async function showCreate(req,res){
    try {
        const response= await ShowService.showService.create({movieId:req.body.movieId,theaterId:req.body.theaterId,costEach:req.body.costEach})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully created"
        return res.json(SuccessResponse)
        
    } catch (error) {
        
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  create show",
            
        })
        throw error
    }
}
async function showRemove(req,res){
    try {
        const response= await ShowService.showService.remove({movieId:req.body.movieId})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully removed"
        return res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  delete show",
            
        })
        throw error
    }
}

async function showUpdate(req,res){
    try {
        const response= await ShowService.showService.update({movieId:req.body.movieId},{id:req.body.id})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully updated"
        return res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  update show",
            
        })
        throw error
    }
}
async function seatUpdate(req,res){
    try {
        seats=parseInt(req.params.seats)
        const response= await ShowService.showService.updateSeat(availableSeats=seats,id=req.body.id)
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully updated"
        return res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  update seats",
            
        })
        throw error
    }
}
async function showFindAll(req,res){
    try {
       
        const response=(req.query)?await ShowService.showService.findAllSort(req.query):await ShowService.showService.findAll()
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found all"
        return res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find all show",
            
        })
        throw error
    }
}

async function showFind(req,res){
    try {
        id=parseInt(req.params.id)
        
        const response= await ShowService.showService.find(id)
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found"
        return res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find  show",
            
        })
        throw error
    }
}


module.exports={
    showController:{showCreate,showRemove,showUpdate,showFind,showFindAll,seatUpdate}
}