const {MovieRepository}= require("../repository")

async function create(data){
    const movie = new MovieRepository()
    try {
        const response= await movie.create(data)
        return response
    } catch (error) {
        throw error
    }
}

async function remove(data){
    const movie = new MovieRepository()
    try {
        const response= await movie.remove(data)
        return response
    } catch (error) {
        throw error
    }
}

async function update(newData,searchData){
    const movie = new MovieRepository()
    try {
        const response= await movie.update(newData,searchData)
        return response
    } catch (error) {
        throw error
    }
}
async function find(id){
    const movie = new MovieRepository()
    try {
        const response= await movie.find(id)
        return response
    } catch (error) {
        throw error
    }
}

async function findAll(){
    const movie = new MovieRepository()
    try {
        const response= await movie.findAll()
        return response
    } catch (error) {
        throw error
    }
}


module.exports={movieService:{create,update,remove,find,findAll}}