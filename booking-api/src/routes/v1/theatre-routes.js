const express= require("express")
const {theatreController}= require("../../controllers")
const router= express.Router()
router.post("/",theatreController.theatreCreate)
router.put("/",theatreController.theatreUpdate)
router.get("/",theatreController.theatreFindAll)
router.get("/:id",theatreController.theatreFind)
router.delete('/',theatreController.theatreRemove)
module.exports={TheatreRoutes:router}
