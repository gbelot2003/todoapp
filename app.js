const express = require("express")
const todoRoutes = require("./routes/todo.routes")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello world!")
})

app.use("/todos", todoRoutes)


//app.listen(3000, () => {
//    console.log("server is now running")
//})


module.exports = app
