const express= require("express")
const {router}= require("./routes")

const app= express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/api",router)

app.listen(3000,()=>{
    console.log("server started")
})













//const citt= await city.findByPk(1)
// const theatree= await citt.createTheatre({theatreName:"CRM",totalSeat:90})