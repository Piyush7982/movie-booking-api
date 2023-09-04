const { INTEGER } = require("sequelize")
const {TheatreService}= require("../services")
const {city} = require("../models")
const {SuccessResponse,ErrorResponse}= require("../utils/common")
async function theatreCreate(req,res){
    try {
        
        const response= await TheatreService.theatreService.create({theatreName:req.body.theatreName,cityId:req.body.cityId,totalSeat:req.body.totalSeat})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully created"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  create theatre",
            
        })
        throw error
    }
}
async function theatreRemove(req,res){
    try {
        const response= await TheatreService.theatreService.remove({theatreName:req.body.theatreName})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully removed"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  delete theatre",
            
        })
        throw error
    }
}

async function theatreUpdate(req,res){
    try {
        const response= await TheatreService.theatreService.update({theatreName:req.body.theatreName},{id:req.body.id})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully updated"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  update theatre",
            
        })
        throw error
    }
}
async function theatreFindAll(req,res){
    try {
        const response= await TheatreService.theatreService.findAll()
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found all"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find all theatres",
            
        })
        throw error
    }
}

async function theatreFind(req,res){
    try {
        id=parseInt(req.params.id)
        
        const response= await TheatreService.theatreService.find(id)
        const state= await city.findByPk(id)
        // response.state=state.cityName
       
        
        SuccessResponse.Data=response
        // Object.assign(SuccessResponse.Data,{state:state.cityName})
        // SuccessResponse.Data.state=state.cityName
        SuccessResponse.Message="succesfully found"
        SuccessResponse.state=state.cityName
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find  theatre",
            
        })
        throw error
    }
}

module.exports={
    theatreController:{theatreCreate,theatreRemove,theatreUpdate,theatreFind,theatreFindAll}
}