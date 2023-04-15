const mongoose = require('mongoose')


async function connect() {

    try {
        await mongoose.connect("mongodb://root:rootpassword@localhost:27017/todo-tdd")
    } catch (error) {
        console.log("error connecting gto mongodb")
        console.log(error)
    }

}

mondule.exports = { connect }
