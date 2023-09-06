const { INTEGER } = require("sequelize")
const {MovieService}= require("../services")
const {SuccessResponse,ErrorResponse}= require("../utils/common")

async function movieCreate(req,res){
    try {
        const response= await MovieService.movieService.create({movieName:req.body.movieName,language:req.body.language})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully created"
        res.json(SuccessResponse)
        
    } catch (error) {
        
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  create movie",
            
        })
        throw error
    }
}
async function movieRemove(req,res){
    try {
        const response= await MovieService.movieService.remove({movieName:req.body.movieName})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully removed"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  delete movie",
            
        })
        throw error
    }
}

async function movieUpdate(req,res){
    try {
        const response= await MovieService.movieService.update({movieName:req.body.movieName},{id:req.body.id})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully updated"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  update movie",
            
        })
        throw error
    }
}
async function movieFindAll(req,res){
    try {
        const response= await MovieService.movieService.findAll()
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found all"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find all movies",
            
        })
        throw error
    }
}

async function movieFind(req,res){
    try {
        id=parseInt(req.params.id)
        
        const response= await MovieService.movieService.find(id)
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found"
        res.json(SuccessResponse)
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find  movie",
            
        })
        throw error
    }
}

module.exports={
    movieController:{movieCreate,movieRemove,movieUpdate,movieFind,movieFindAll}
}