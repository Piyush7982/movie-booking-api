const express= require("express")
const {infoController}= require("../../controllers")
const {CityRoutes}= require("./city-routes")
const {TheatreRoutes}= require("./theatre-routes")
const {movieRoutes}= require("./movie-routes")
const {ShowRoutes}= require("./show-routes")
const router= express.Router()
router.use("/info",infoController)
router.use("/city",CityRoutes)
router.use("/theatre",TheatreRoutes)
router.use("/movie",movieRoutes)
router.use("/show",ShowRoutes)

module.exports={V1routes:router}