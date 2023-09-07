const {crud}= require("./crud-repository")
const {show}= require("../models")
const customError= require("../utils/errors")
class showRepository extends crud{
    constructor(){
        super(show)
    }

    async findFiltered(filter){
        try {
            const response= await show.findAll({where:filter})
            return response
        } catch (error) {
            throw new customError(error.message,400)
        }
    }
}
module.exports=showRepository