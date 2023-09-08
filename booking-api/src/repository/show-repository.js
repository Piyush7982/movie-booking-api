const {crud}= require("./crud-repository")
const {show,movie,theatre,city}= require("../models")
const {attribute}= require("../utils/sequelize")
const customError= require("../utils/errors")
const { StatusCodes } = require("http-status-codes")


const db = require('../models');
const {addRowLockOnShows}= require("./raw-query")
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
    
    async updateSeats(requiredSeats,id){
        const transaction = await db.sequelize.transaction();
        await db.sequelize.query(addRowLockOnShows(id));
        const response= await show.findByPk(id)
        let seat=response.dataValues.availableSeats
        if(requiredSeats<=seat){
            try {
                seat=seat-requiredSeats
                await show.update({availableSeats:seat},{where:
                    {id:id}
                },{transaction:transaction})
                await transaction.commit()
                const finalResponse=await show.findByPk(id)
                return finalResponse
            } catch (error) {
                await transaction.rollback()
                throw new customError(error.name,StatusCodes.BAD_REQUEST)
            }

        }
        
        else{
            await transaction.rollback()
            throw new customError("Not Enough Seats",StatusCodes.NOT_ACCEPTABLE)
        }
    }
}
module.exports=showRepository