const mongoose = require('./connection')

const User = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    // dogs: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Dog"
    // }],
})

const UserCollection = mongoose.model('User', User)

function getAllUsers() {
    return UserCollection.find().populate('dogs').exec()
}

function getSingleUser(userId) {
    return UserCollection.findById(userId).populate('dogs').exec()
}

function addNewUser(user) {
    return UserCollection.create(user)
}

function updateUser(userId, updatedUser) {
    return UserCollection.findByIdAndUpdate(userId, updatedUser, { new: true })
}
function deleteUser(userId) {
    return UserCollection.findByIdAndDelete(userId)
}
module.exports = { deleteUser, updateUser, addNewUser, getSingleUser, getAllUsers }