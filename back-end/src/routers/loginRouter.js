const express = require('express');
const { getAllUsers, createUser, findUser } = require('../login.model');
const router = express.Router();
const bcrypt = require('bcryptjs')

router.get('/', function (req, res) {
    return getAllUsers()
        .then(function (userResponse) {
            res.status(200).send(userResponse);
        }, function (error) {
            res.status(404).send("Error getting Pokemon");
        })
})

router.get('/:username/:password', function (req, res) {
    const username = req.params.username
    const password = req.params.params

    findUser(username).then(function (userResponse) {
        if(bcrypt.compareSync(password, userResponse.password)) {
            return res.status(200).send(userResponse)
        } else {
            return res.status(401).send('Invalid password')
        }
    }, function(error) {
        return res.status(404).send(error)
    })
})

router.post('/', function (req, res) {
    const newUser = req.body;
    const password = String(newUser.password) // have to cast to string
    newUser.password = bcrypt.hashSync(password, 10)
    createUser(newUser).then(function(userResponse) {
        return res.status(200).send(userResponse)
    }, function(error) {
        return res.status(404).send(error)
    })
})

router.put('/:id', function (req, res) {
})

router.delete('/:id', function (req, res) {

})

module.exports = router;