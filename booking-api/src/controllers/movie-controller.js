const { INTEGER } = require("sequelize")
const {MovieService}= require("../services")
const {SuccessResponse,ErrorResponse}= require("../utils/common")

async function movieCreate(req,res){
    try {
        const response= await MovieService.movieService.create({movieName:req.body.movieName,language:req.body.language})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully created"
        return res.json(SuccessResponse)
        
    } catch (error) {
        
       ErrorResponse.Error=error
        res
        .status(error.statusCode)
        .json(ErrorResponse)
        throw error
    }
}
async function movieRemove(req,res){
    try {
        const response= await MovieService.movieService.remove({movieName:req.body.movieName})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully removed"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status(error.statusCode)
        .json(ErrorResponse)
        throw error
    }
}

async function movieUpdate(req,res){
    try {
        const response= await MovieService.movieService.update({movieName:req.body.movieName},{id:req.body.id})
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully updated"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status(error.statusCode)
        .json(ErrorResponse)
        throw error
    }
}
async function movieFindAll(req,res){
    try {
        const response= await MovieService.movieService.findAll()
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found all"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status(error.statusCode)
        .json(ErrorResponse)
        throw error
    }
}

async function movieFind(req,res){
    try {
        id=parseInt(req.params.id)
        
        const response= await MovieService.movieService.find(id)
        SuccessResponse.Data=response
        SuccessResponse.Message="succesfully found"
        return res.json(SuccessResponse)
        
    } catch (error) {
        ErrorResponse.Error=error
        res
        .status(error.statusCode)
        .json(ErrorResponse)
        throw error
    }
}

module.exports={
    movieController:{movieCreate,movieRemove,movieUpdate,movieFind,movieFindAll}
}