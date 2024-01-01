const express = require('express');
const connect = require('./config/db');
const router = require('./routes/user.route');
var cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/auth');
const Reciperouter = require('./routes/recipe.route');
const app = express();
app.set("view engine", "ejs")

app.set("viwes", __dirname + "/views")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/user",router)
app.use("/recipe",Reciperouter)

app.get("/", (req, res) => {
    res.send("welocome to recipe ");
});
app.listen(8090,()=>{
    console.log('listening on port 8080');
    connect()
})