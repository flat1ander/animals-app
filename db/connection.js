// Import mongoose
const mongoose = require('mongoose')

// database configuration 
const DATABASE_URL = "mongodb+srv://thematthewlane:e0mDIBV2ocJzTWzp@cluster1.smwrnhs.mongodb.net/?retryWrites=true&w=majority"

// mongoose connect to url
mongoose.connect(DATABASE_URL);

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to mongo")
})

mongoose.connection.on("error", (error) => {
    console.log("mongoDB Connection Error:", error)
})

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})


// export mongoose 
module.exports = { mongoose }