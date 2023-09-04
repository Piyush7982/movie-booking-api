const {CityRepository}= require("../repository")

async function create(data){
    const city = new CityRepository()
    try {
        const response= await city.create(data)
        return response
    } catch (error) {
        throw error
    }
}

async function remove(data){
    const city = new CityRepository()
    try {
        const response= await city.remove(data)
        return response
    } catch (error) {
        throw error
    }
}

async function update(newData,searchData){
    const city = new CityRepository()
    try {
        const response= await city.update(newData,searchData)
        return response
    } catch (error) {
        throw error
    }
}
async function find(id){
    const city = new CityRepository()
    try {
        const response= await city.find(id)
        return response
    } catch (error) {
        throw error
    }
}

async function findAll(){
    const city = new CityRepository()
    try {
        const response= await city.findAll()
        return response
    } catch (error) {
        throw error
    }
}


module.exports={cityService:{create,update,remove,find,findAll}}