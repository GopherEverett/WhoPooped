const express = require('express')

const dogApi = require('../models/dog')

const dogRouter = express.Router()

dogRouter.get('/', (req, res) => {
    dogApi.getAllDogs()
        .then((dogs) => {
            res.json(dogs)
        })
})

dogRouter.get('/:dogId', (req, res) => {
    dogApi.getSingleDog(req.params.dogId)
        .then((dog) => {
            res.json(dog)
        })
        .catch((err) => {
            console.log(err)
        })
})

dogRouter.post('/', (req, res) => {
    dogApi.addNewDog(req.body)
        .then((dog) => {
            res.json(dog)
        })
})

dogRouter.put('/:dogId', (req, res) => {
    dogApi.updateDog(req.params.dogId, req.body)
        .then((updateddog) => {
            res.json(updateddog)
        })
})

dogRouter.delete('/:dogId', (req, res) => {
    dogApi.deleteDog(req.params.dogId)
        .then(() => {
            res.json({ msg: `Successful Delete` })
        })
})

module.exports = {
    dogRouter
}