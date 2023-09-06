const{router}= require("./info-controller")
const {cityController}= require("./city-controller")
const {theatreController}= require("./theatre-controller")
const {movieController}= require("./movie-controller")
module.exports={
    infoController:router,
    cityController:cityController,
    theatreController:theatreController,
    movieController:movieController
}