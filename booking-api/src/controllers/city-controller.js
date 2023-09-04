const { INTEGER } = require("sequelize")
const {CityService}= require("../services")

async function cityCreate(req,res){
    try {
        const response= await CityService.cityService.create({cityName:req.body.cityName})
        res.json({
            status:"success",
            error:"",
            city:response,
            comment:"succesfully created"
        })
        console.log(response)
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  create city",
            
        })
        throw error
    }
}
async function cityRemove(req,res){
    try {
        const response= await CityService.cityService.remove({cityName:req.body.cityName})
        res.json({
            status:"success",
            error:"",
            city:response,
            comment:"succesfully removed"
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  delete city",
            
        })
        throw error
    }
}

async function cityUpdate(req,res){
    try {
        const response= await CityService.cityService.update({cityName:req.body.cityName},{id:req.body.id})
        res.json({
            status:"success",
            error:"",
            city:response,
            comment:"succesfully updated"
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  update city",
            
        })
        throw error
    }
}
async function cityFindAll(req,res){
    try {
        const response= await CityService.cityService.findAll()
        res.json({
            status:"success",
            error:"",
            city:response,
            comment:"succesfully found all"
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find all cities",
            
        })
        throw error
    }
}

async function cityFind(req,res){
    try {
        id=parseInt(req.params.id)
        console.log(typeof(id))
        const response= await CityService.cityService.find(id)
        res.json({
            status:"success",
            error:"",
            city:response,
            comment:"succesfully found "
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            error:"",
            comment:"failed to  find  city",
            
        })
        throw error
    }
}

module.exports={
    cityController:{cityCreate,cityRemove,cityUpdate,cityFind,cityFindAll}
}