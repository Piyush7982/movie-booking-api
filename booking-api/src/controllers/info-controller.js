const express= require("express")
const {SuccessResponse,ErrorResponse}= require("../utils/common")
const CustomError = require("../utils/errors")
const { StatusCodes } = require("http-status-codes")
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
        throw new CustomError(error.message,StatusCodes.BAD_REQUEST)
    }
   
})
module.exports={router}