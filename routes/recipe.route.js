const { Router } = require("express")
const { recipe_form, Recipe_post, allrecipe, userrecipe, homepage, userrecipepage, recipedelet, recipeupadate, updatepage } = require("../controller/recipe.logic")
const { auth, isauth } = require("../middlewares/auth")

const Reciperouter = Router()


Reciperouter.get("/recipeform", auth, recipe_form)
Reciperouter.post("/addrecipe", auth, Recipe_post)
Reciperouter.get("/allrecipes", allrecipe)
Reciperouter.get("/userrecipepage", userrecipepage)
Reciperouter.get("/userrecipe", userrecipe)
Reciperouter.delete("/delete/:id" ,isauth, recipedelet)
Reciperouter.patch("/edit/:id" ,  recipeupadate)
Reciperouter.get("/homepage", homepage)
Reciperouter.get("/updatpage", updatepage)
module.exports = Reciperouter