const express= require("express")
const {showController}= require("../../controllers")
const router= express.Router()
router.post("/",showController.showCreate)
router.put("/",showController.showUpdate)
router.put("/:seats",showController.seatUpdate)
router.get("/",showController.showFindAll)
router.get("/:id",showController.showFind)
router.delete('/',showController.showRemove)

module.exports={ShowRoutes:router}