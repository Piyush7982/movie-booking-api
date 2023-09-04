const express= require("express")
const {SuccessResponse,ErrorResponse}= require("../utils/common")
const router= express.Router()
router.get("/",(req,res)=>{
   
    try {
        SuccessResponse.Data="Inside Info Controller,Api is working"
        res.json({
            SuccessResponse
        })
        
    } catch (error) {
        ErrorResponse.Error=error.name
        ErrorResponse.Message=error.message
        res.json({
            ErrorResponse
        })
        throw error
    }
   
})
module.exports={router}