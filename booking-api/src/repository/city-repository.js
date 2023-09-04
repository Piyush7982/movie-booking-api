const {crud}= require("./crud-repository")
const {city}= require("../models")
class cityRepository extends crud{
    constructor(){
        super(city)
    }
}
module.exports=cityRepository