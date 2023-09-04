const express= require("express")
const {cityController}= require("../../controllers")
const router= express.Router()
router.post("/",cityController.cityCreate)
router.put("/",cityController.cityUpdate)
router.get("/",cityController.cityFindAll)
router.get("/:id",cityController.cityFind)
router.delete('/',cityController.cityRemove)
module.exports={CityRoutes:router}