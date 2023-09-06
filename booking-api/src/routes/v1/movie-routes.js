const express= require("express")
const {movieController}= require("../../controllers")
const router= express.Router()
router.post("/",movieController.movieCreate)
router.put("/",movieController.movieUpdate)
router.get("/",movieController.movieFindAll)
router.get("/:id",movieController.movieFind)
router.delete('/',movieController.movieRemove)
module.exports={movieRoutes:router}