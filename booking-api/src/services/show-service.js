const {ShowRepository}= require("../repository")
const {theatre}= require("../models")
async function create(data){
    const show = new ShowRepository()
    try {
        let date= new Date()
        let currDate=date.getFullYear() +"-"+ (date.getMonth()+1) + "-" +date.getDate() +    " "  + date.getHours() + ":"  + date.getMinutes() + ":" + date.getSeconds()
        data.date=currDate
        // console.log(data)
        let e=await theatre.findByPk(data.theaterId)
        data.availableSeats=e.dataValues.totalSeat
        
        const response= await show.create(data)
        return response
    } catch (error) {
        throw error
    }
}

async function remove(data){
    const show = new ShowRepository()
    try {
        const response= await show.remove(data)
        return response
    } catch (error) {
        throw error
    }
}

async function update(newData,searchData){
    const show = new ShowRepository()
    try {
        const response= await show.update(newData,searchData)
        return response
    } catch (error) {
        throw error
    }
}
async function find(id){
    const show = new ShowRepository()
    try {
        const response= await show.find(id)
        return response
    } catch (error) {
        throw error
    }
}

async function findAll(){
    const show = new ShowRepository()
    try {
        const response= await show.findAll()
        return response
    } catch (error) {
        throw error
    }
}
async function findAllSort(query){
    let filter={}
    
    if(query.price){
        filter.costEach=query.price
    }
    const show = new ShowRepository()
    try {
        const response= await show.findFiltered(filter)
        return response
    } catch (error) {
        throw error
    }
}


module.exports={showService:{create,update,remove,find,findAll,findAllSort}}