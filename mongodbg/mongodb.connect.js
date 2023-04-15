const mongoose = require('mongoose')


async function connect() {

    try {
        await mongoose.connect("mongodb://root:password@localhost:27017",
        {useNewUrlparser: true}
        )
        //console.log("connected!!")
    } catch (error) {
        console.log("error connecting gto mongodb")
        console.log(error)
    }

}
//mongosh "mongodb+srv://cluster0.6cxiaxv.mongodb.net/myFirstDatabase" --apiVersion 1 --username supertest
module.exports = { connect }
