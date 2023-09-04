const {TheatreRepository}= require("../repository")

async function create(data){
    const theatre = new TheatreRepository()
    try {
        const response= await theatre.create(data)
        return response
    } catch (error) {
        throw error
    }
}

async function remove(data){
    const theatre = new TheatreRepository()
    try {
        const response= await theatre.remove(data)
        return response
    } catch (error) {
        throw error
    }
}

async function update(newData,searchData){
    const theatre = new TheatreRepository()
    try {
        const response= await theatre.update(newData,searchData)
        return response
    } catch (error) {
        throw error
    }
}
async function find(id){
    const theatre = new TheatreRepository()
    try {
        const response= await theatre.find(id)
        return response
    } catch (error) {
        throw error
    }
}

async function findAll(){
    const theatre = new TheatreRepository()
    try {
        const response= await theatre.findAll()
        return response
    } catch (error) {
        throw error
    }
}


module.exports={theatreService:{create,update,remove,find,findAll}}