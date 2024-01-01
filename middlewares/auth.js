const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    let token = req.cookies.id
    // let id = req.cookies.id
    if (token) {

        next()
    }
    else {
        res.redirect("/user/login")
    }
}
const isauth = (req , res , next) => {
    let {role} = req.cookies
   
    
    if(role == "admin"){

        next()
    }
    else if(!role){
        res.send("login first")
    }
    else{
        res.send("You are not authorized to access this page.")
        console.log("You are not authorized to access this page ")
    }
}
module.exports = { auth , isauth}