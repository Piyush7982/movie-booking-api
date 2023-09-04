const express= require("express")
const router= express.Router()
router.get("/",(req,res)=>{
    res.json({
        status:"OK",
        comment:"inside info controller",
        error:"none"

    })
})
module.exports={router}