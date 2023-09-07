const {crud}= require("./crud-repository")
const {theatre}= require("../models")
const {city}= require("../models")

class theatreRepository extends crud{
    constructor(){
        super(theatre)
    }
    async getone(id){
        try {
            const theatreId = await theatre.findByPk(id,{include: [{model: city,attributes: ['cityName']  }]})
            return theatreId
        } catch (error) {
            throw error
        }
    }
    async getComplete(){
        try {
            const theatreId = await theatre.findAll({include: [{model: city,attributes: ['cityName']  }]})
            return theatreId
        } catch (error) {
            throw error
        }
    }
}
module.exports=theatreRepository