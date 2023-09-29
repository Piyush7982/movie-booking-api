const {ShowRepository}= require("../repository")
const {theatre}= require("../models")
const { Op } = require('sequelize');
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
    let filter={show:{},movie:{},theatre:{},city:{}}
    let order=[]
    //Filters=?city=name,?theatre=name,?movie=name,?lang=lang
    //sort=?price_DESC,?price_ASC
    if(query.price){
        [minPrice, maxPrice] = query.price.split("-");
        filter.show.costEach={[Op.between]:[minPrice, ((maxPrice == undefined) ? 5000: maxPrice)]}
        
    }
    if(query.city){
        filter.city.cityName=query.city
    }
    if(query.theatre){
        filter.theatre.theatreName=query.theatre
    }
    if(query.movie){
        filter.movie.movieName=query.movie
    }
    if(query.lang){
        filter.movie.language=query.lang
    }
    if(query.sort) {
        order = [query.sort.split('_')];
        if(order[0][0]=='price'){
            order[0][0]="costEach"
        }
       
      
    }
    const show = new ShowRepository()
    try {
        const response= await show.findFiltered(filter,order)
        return response
    } catch (error) {
        throw error
    }
}
async function updateSeat(requiredSeats,id,inc){
    const show = new ShowRepository()
    try {
        const response= await show.updateSeats(requiredSeats,id,inc)
        return response 
    } catch (error) {
        throw error
    }
    
}


module.exports={showService:{create,update,remove,find,findAll,findAllSort,updateSeat}}