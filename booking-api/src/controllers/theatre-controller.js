const { INTEGER } = require("sequelize")
const {TheatreService}= require("../services")
const {StatusCodes}= require("http-status-codes")
const {SuccessResponse,ErrorResponse}= require("../utils/common")
async function theatreCreate(req,res){
    try {
      
        const response= await TheatreService.theatreService.create({theatreName:req.body.theatreName,cityId:req.body.cityId,totalSeat:req.body.totalSeat})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully created"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status((error.statusCode)?error.statusCode:StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse)
        throw error
    }
}
async function theatreRemove(req,res){
    try {
        const response= await TheatreService.theatreService.remove({theatreName:req.body.theatreName})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully removed"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status((error.statusCode)?error.statusCode:StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse)
        throw error
    }
}

async function theatreUpdate(req,res){
    try {
        const response= await TheatreService.theatreService.update({theatreName:req.body.theatreName},{id:req.body.id})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully updated"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status((error.statusCode)?error.statusCode:StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse)
        throw error
    }
}
async function theatreFindAll(req,res){
    try {
        const response= await TheatreService.theatreService.findAll()
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found all"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status((error.statusCode)?error.statusCode:StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse)
        throw error
    }
}

async function theatreFind(req,res){
    try {
        id=parseInt(req.params.id)
        
        const response= await TheatreService.theatreService.find(id)
        SuccessResponse.Data=response      
        SuccessResponse.Message="succesfully found"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status((error.statusCode)?error.statusCode:StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse)
        throw error
    }
}

module.exports={
    theatreController:{theatreCreate,theatreRemove,theatreUpdate,theatreFind,theatreFindAll}
}