

class crud{
    constructor(model){
        this.model=model
    }
    async create(data){
        try {
            const response= await this.model.create(data)
            return response
        } catch (error) {
            throw error
        }
    }
    async remove(data){
        try {
            const response= await this.model.destroy({where:{data}})
            return response
        } catch (error) {
            throw error
        }
    }
    async update(newData,searchData){
        try {
            const response= await this.model.update(newData, {where: searchData})
            return response
        } catch (error) {
            throw error
        }
    }
    async findAll(){
        try {
            const response= await this.model.findAll()
            return response
        } catch (error) {
            throw error
        }
    }
    async find(id){
        try {
            const response= await this.model.findByPk(id)
            return response
        } catch (error) {
            throw error
        }
    }

}
module.exports={crud}