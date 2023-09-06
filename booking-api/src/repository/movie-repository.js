const {crud}= require("./crud-repository")
const {movie}= require("../models")
class movieRepository extends crud{
    constructor(){
        super(movie)
    }
}
module.exports=movieRepository