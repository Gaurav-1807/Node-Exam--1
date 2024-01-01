const mongoose = require('mongoose')

const recipe = new mongoose.Schema({
    title : String,
    des : String,
    img : String,
    UserId : {type : mongoose.Schema.Types.ObjectId,ref :"users"}
})

const recipeSchema = mongoose.model('recipes', recipe)

module.exports =recipeSchema