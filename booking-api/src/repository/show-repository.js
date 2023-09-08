const {crud}= require("./crud-repository")
const {show,movie,theatre,city}= require("../models")
const {attribute}= require("../utils/sequelize")
const customError= require("../utils/errors")

class showRepository extends crud{
    constructor(){
        super(show)
    }
    async findAll(){
        try {
            const response= await show.findAll({include:[{model:movie,require:true,attributes:attribute},{model:theatre,require:true,attributes:attribute,include:[{model:city,attributes:attribute}]}]})
            return response
        } catch (error) {
            throw new customError(error.message,400)
        }
    }
    
    async findFiltered(filter,sort){
        try {
            const response= await show.findAll({where:filter.show,order:sort,attributes:attribute,include:[{model:movie,require:true,attributes:attribute,where:filter.movie},{model:theatre,require:true,where:filter.theatre,attributes:attribute,include:[{model:city,attributes:attribute,where:filter.city}]}]})
            return response
        } catch (error) {
            throw new customError(error.message,400)
        }
    }
}
module.exports=showRepository