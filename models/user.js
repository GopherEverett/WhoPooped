const mongoose = require('./connection')

const User = new mongoose.Schema({
    name: String,
    location: String,
    image: String
})

const UserCollection = mongoose.model('User', User)

function getAllUsers() {
    return UserCollection.find()
}

function getSingleUser(userId) {
    return UserCollection.findById(userId)
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