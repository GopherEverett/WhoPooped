const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/whopooped";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    })

module.exports = mongoose