const {crud}= require("./crud-repository")
const {theatre}= require("../models")
const {city}= require("../models")
const customError= require("../utils/errors") 
class theatreRepository extends crud{
    constructor(){
        super(theatre)
    }
    async getone(id){
        try {
            const theatreId = await theatre.findByPk(id,{include: [{model: city,attributes: ['cityName']  }]})
            return theatreId
        } catch (error) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new customError(explanation,StatusCodes.NOT_IMPLEMENTED)
        }
    }
    async getComplete(){
        try {
            const theatreId = await theatre.findAll({include: [{model: city,attributes: ['cityName']  }]})
            return theatreId
        } catch (error) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new customError(explanation,StatusCodes.NOT_IMPLEMENTED)
        }
    }
}
module.exports=theatreRepository