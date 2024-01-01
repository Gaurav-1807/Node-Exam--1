const recipeSchema = require("../modals/recipe.modal")



const Recipe_post = async (req, res) => {
    let { title, des, price, img } = req.body
  
  
    const data = await recipeSchema.create({
        title,
        des,
        price,
        img,
        UserId: req.cookies.id
    })
    res.send({msg:"product added succesfully",data})
}
const recipe_form = (req, res) => {
    res.render("recipeform")
}

const allrecipe =  async (req, res) => {
    let data =await recipeSchema.find()
    res.send(data)
  
}

const userrecipe = async (req, res) => {
    let data = await recipeSchema.find({UserId : req.cookies.id})
    res.send(data)
}

const homepage = (req, res) => {
    res.render("home")
}
const userrecipepage =  (req, res) => {
    res.render("userproduct")
}
const recipedelet = async (req, res) => {
    let { id } = req.params

    let data = await recipeSchema.findByIdAndDelete(id)
    res.send(data)
}

const recipeupadate = async (req, res) => {
    let { id } = req.params

    let data = await recipeSchema.findByIdAndUpdate(id)
    res.send(data)
}

const updatepage = (req, res) => {
    // let  id  = req.params.id
    console.log(req.params)
    res.send("update")
    // res.cookie("updateproid",id).redirect("updatepro")
}

module.exports={ Recipe_post, recipe_form , allrecipe, userrecipe, homepage , userrecipepage , recipedelet,recipeupadate, updatepage}