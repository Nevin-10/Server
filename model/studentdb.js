//Database Making



const mongoose = require("mongoose")

//Mongoose helps in connection for creating common language b/w database and server

//Connecting database and server

mongoose.connect('mongodb+srv://nevinthomas48:nevinthomas48@cluster0.elz3wm0.mongodb.net/?retryWrites=true&w=majority')
.then(() => {

    console.log("DB Connected")


})
.catch((err)=>{
    console.log(err)
})

//Creating schema for mapinng answers

let Schema = mongoose.Schema;

//Intialise schema, expecting multiple json value from front end
//2 text field Number and String

const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})

//Wrapping in a variable to make a model(Database)

//Inside model schema and collections
//students is collection where schema falls
//Databse kodukan pona model

var studentModel = mongoose.model('students',studentSchema)

//Exporting to index

module.exports = studentModel
