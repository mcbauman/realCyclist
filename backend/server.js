require("dotenv").config()
const express = require("express")
const bodyParser = require('body-parser');
const cors = require("cors")
// const BlueprintSchema = require("./schemas/blueprintSchema")

const userRouter = require("./routes/userRouter")

const mongooseConnect=require("./helpers/mongooseConnect.js")

mongooseConnect.connectMongoose()

const app=express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());

app.use("/user",userRouter);

app.get("", async (req,res)=>{
    console.log("GETREQUEST");
    res.send("Server is Up and Responding")
    // try {
    //     const result = await BlueprintSchema.find()
    //     res.send(result)
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send(error)
    // }
})

// app.post("", async (req,res)=>{
//     console.log("Post BlueprintSchema",req.body);
//     try {
//         let result
//         if(req.body._id){
//             result = await BlueprintSchema.findOneAndUpdate({_id:req.body._id}, req.body,{new:true})
//         }else{
//             result = await BlueprintSchema.create(req.body)
//         }
//         res.send(result)
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error)
//     }
// })

// blueprintRouter.put(":table", checkAuth.checkAuth, async (req,res)=>{
    // app.put("/:table", async (req,res)=>{
    //     console.log("blueprint",req.body);
    //     try {
    //         const table= BlueprintArray.find(x=>x.name===req.params.table).schema
    //         const result=await table.findByIdAndUpdate(req.body._id,req.body.update,{new:true})
    //         res.status(200).send(result)
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send(error)
    //     }
    // })
    
    // blueprintRouter.delete(":table", checkAuth.checkAuth, async (req, res)=>{
    // app.delete("/:table", async (req, res)=>{
    //     console.log("DELETE-REQUEST on /blueprint",req.body)
    //     try {
    //         const table= BlueprintArray.find(x=>x.name===req.params.table).schema
    //         const result=await table.deleteOne(req.body)
    //         res.send(result)
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send(error)
    //     }
    // })

app.listen(process.env.PORT,()=>{
    console.log("Server up on ", process.env.PORT);
})