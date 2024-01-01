const moongose = require("mongoose")

const userschema = new moongose.Schema({
    username : String,
    password : String,
    email : String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user", 
    }
})

const user = moongose.model("users" , userschema)


module.exports = user