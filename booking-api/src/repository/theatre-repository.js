const {crud}= require("./crud-repository")
const {theatre}= require("../models")
class theatreRepository extends crud{
    constructor(){
        super(theatre)
    }
}
module.exports=theatreRepository