const { INTEGER } = require("sequelize")
const {TheatreService}= require("../services")
const {city} = require("../models")
async function theatreCreate(req,res){
    try {
        
        const response= await TheatreService.theatreService.create({theatreName:req.body.theatreName,cityId:req.body.cityId,totalSeat:req.body.totalSeat})
        res.json({
            status:"success",
            error:"",
            theatre:response,
            comment:"succesfully created"
        })
        
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
        res.json({
            status:"success",
            error:"",
            theatre:response,
            comment:"succesfully removed"
        })
        
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
        res.json({
            status:"success",
            error:"",
            theatre:response,
            comment:"succesfully updated"
        })
        
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
        res.json({
            status:"success",
            error:"",
            theatre:response,
            comment:"succesfully found all"
        })
        
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
        res.json({
            status:"success",
            error:"",
            theatre:response,
            state:state.cityName,
            comment:"succesfully found "
        })
        
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