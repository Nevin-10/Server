//API creation, testing using postman


// Importing the express

const express = require("express")
const { model } = require("mongoose");

const studentModel = require("./model/studentdb")

const cors = require("cors")  //Importing and then intitalisng cors after installation, preventing networking error+


// 2.Intialisation

const app = new express()


//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors()) //using cors

//3.API creation

//at url /view my api is present

app.get('/view',(req,res) =>{

    res.json({"name":"Tiya","Age":"50"})


})

app.post('/create',(req,res) => {

    var result = new studentModel(req.body)
    result.save()
    //studentModel getting data, attaching body to student model
    //Saving the result in the mongoDB database
    //Response to front end

    res.send("Data Added")


})

//To view, fetch things from database model

//

app.get("/see",async(req,res) => { //async means await is coming later.
    var data = await studentModel.find(); //To give time to find the data, 5 lines here.
    //Only after completion next line would work.
    // console.log(data);
   res.json(data)

})

//Post can be used for delete and update

app.del('/delete/:id',async(req,res) => {

    //Know id

    let id = req.params.id //Getting the id from parameter
    await studentModel.findByIdAndDelete(id)

    //For user response

    res.send("Delete")

})

app.put("/edit/:id",async(req,res)=>{

    var id = req.params.id

    await studentModel.findByIdAndUpdate(id,req.body) //Edited content pass
    res.send("Updated")
})

//Listener port


app.listen(8080,()=>{
    console.log("Port 8080 is Active!!")
})
