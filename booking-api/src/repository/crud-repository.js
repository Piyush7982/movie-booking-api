const customError= require("../utils/errors") 
const {StatusCodes}= require("http-status-codes")

class crud{
    constructor(model){
        this.model=model
    }
    async create(data){
        try {
            const response= await this.model.create(data)
           
            return response
        } catch (error) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
           throw new customError(explanation,StatusCodes.BAD_REQUEST)
            
        }
        
    }
    async remove(data){
        try {
            const response= await this.model.destroy({where:{data}})
            return response
        } catch (error) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new customError(explanation,StatusCodes.BAD_REQUEST)
        }
    }
    async update(newData,searchData){
        try {
            const response= await this.model.update(newData, {where: searchData})
            return response
        } catch (error) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new customError(explanation,StatusCodes.BAD_REQUEST)
        }
    }
    async findAll(){
        try {
            const response= await this.model.findAll()
            return response
        } catch (error) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new customError(explanation,StatusCodes.BAD_REQUEST)
        }
    }
    async find(id){
        try {
            const response= await this.model.findByPk(id)
            return response
        } catch (error) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new customError(explanation,StatusCodes.BAD_REQUEST)
        }
    }

}
module.exports={crud}