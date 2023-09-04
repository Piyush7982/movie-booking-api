const express= require("express")
const {infoController}= require("../../controllers")
const {CityRoutes}= require("./city-routes")
const router= express.Router()
router.use("/info",infoController)
router.use("/city",CityRoutes)

module.exports={V1routes:router}