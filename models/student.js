const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "rollNo":String,
        "admNo":String,
        "college":String
    }
)
let studentmodel=mongoose.Model("students",schema);
module.exports={studentmodel}