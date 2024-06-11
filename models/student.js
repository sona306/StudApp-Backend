const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
       "name":String,
        "rollNo":String,
        "admNo":String,
        "college":String,
        "parentname":String,
        "dob":String,
        "email":String,
        "password":String,
        "confirm":String
    }
)
let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}