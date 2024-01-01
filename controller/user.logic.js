const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const user = require("../modals/user.modals")

const signupui = (req, res) => {
    res.render("signup")
}
const loginpage = (req, res) => {
    res.render('login')
}
const signup = async (req, res) => {
    let { username, password, email, role } = req.body
    let users = await user.findOne({ email: email })

    if (users) {
        res.cookie("role", users.role)
        res.cookie("id", users.id).send(`Account created successfully  ${users.username}`)
    }
    else {
        bcrypt.hash(password, 5, async (err, hash) => {
            let data = await user.create({
                username: username,
                email: email,
                role: role,
                password: hash,

            })
            let token = jwt.sign({ token: data.role }, "token")

            res.cookie("id", data._id).cookie("role",data.role).cookie("token", token).send(`Account created successfully  ${data.username}`)
        })


    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    const userdata = await user.findOne({ email: email, })

    if (userdata) {

        bcrypt.compare(password, userdata.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ token: userdata.role }, "token")
                res.cookie("id", userdata._id).cookie("role", userdata.role).cookie("token",token).send({ message: "login successful" })
            }
            else {
                res.send({ message: "login failed / invalid password" })
            }
        })
    }
    else {
        res.send({ message: `user not found ` })
    }
}

const profilepage = (req, res) => {
    res.render("profile")
}

const userdata = async (req, res) => {
    let { id } = req.cookies
    let data = await user.findById(req.cookies.id)
    res.send(data)
}

const logout = (req, res) => {
    res.clearCookie("id")
    res.redirect("login")

}
module.exports = { signup, signupui, loginpage, login, userdata, profilepage, logout }