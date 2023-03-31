require('dotenv').config()
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE_URL

mongoose.connect(connectionString)

mongoose.connect.on("connected", () => {
    console.log("Mongoose connected to mongo")
})

mongoose.connect.on("error", (error) => {
    console.log("mongoDB Connection Error:", error)
})

mongoose.connect.on("disconnected", () => {
    console.log("mongoDB disconnected")
})
