const mongoose = require('./connection')
const Schema = mongoose.Schema;

const Dog = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    image: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    latestpoop: Date
})

const DogCollection = mongoose.model('Dog', Dog)

function getAllDogs() {
    return DogCollection.find().populate('owner').exec()
}

function getAllDogsByOwnerId(ownerId) {
    return DogCollection.find({owner: ownerId}).populate('owner').exec()
}

function getSingleDog(dogId) {
    return DogCollection.findById(dogId).populate('owner').exec()
}

function addNewDog(dog) {
    return DogCollection.create(dog)
}

function updateDog(dogId, updatedDog) {
    return DogCollection.findByIdAndUpdate(dogId, updatedDog, { new: true })
}
function deleteDog(dogId) {
    return DogCollection.findByIdAndDelete(dogId)
}
module.exports = { deleteDog, updateDog, addNewDog, getSingleDog, getAllDogs, getAllDogsByOwnerId }