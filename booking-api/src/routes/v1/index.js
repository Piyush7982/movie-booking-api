const express= require("express")
const {infoController}= require("../../controllers")
const {CityRoutes}= require("./city-routes")
const {TheatreRoutes}= require("./theatre-routes")
const router= express.Router()
router.use("/info",infoController)
router.use("/city",CityRoutes)
router.use("/theatre",TheatreRoutes)

module.exports={V1routes:router}