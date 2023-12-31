const { INTEGER } = require("sequelize")
const {CityService}= require("../services")
const {SuccessResponse,ErrorResponse}= require("../utils/common")
const { StatusCodes } = require("http-status-codes")

async function cityCreate(req,res){
    try {
        const response= await CityService.cityService.create({cityName:req.body.cityName})
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
async function cityRemove(req,res){
    try {
        const response= await CityService.cityService.remove({cityName:req.body.cityName})
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

async function cityUpdate(req,res){
    try {
        const response= await CityService.cityService.update({cityName:req.body.cityName},{id:req.body.id})
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
async function cityFindAll(req,res){
    try {
        const response= await CityService.cityService.findAll()
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

async function cityFind(req,res){
    try {
        id=parseInt(req.params.id)
        
        const response= await CityService.cityService.find(id)
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
    cityController:{cityCreate,cityRemove,cityUpdate,cityFind,cityFindAll}
}