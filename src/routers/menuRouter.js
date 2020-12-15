const express = require('express');
const { getAllMenus, createMenu, findMenu } = require('../models/menu.model');
const router = express.Router();

router.get('/', function (req, res) {
    return getAllMenus()
        .then(function (menuResponse) {
            res.status(200).send(menuResponse);
        }, function (error) {
            res.status(404).send("Error getting users");
        })
})

router.get('/:_id', function (req, res) {
    const _id = req.params.username

    findMenu(_id).then(function (menuResponse) {
        return res.status(200).send(menuResponse)
    }, function(error) {
        return res.status(404).send(error)
    })
})

router.post('/items', function (req, res) {
    const newMenu = req.body;
    createUser(newMenu).then(function(menuResponse) {
        return res.status(200).send(menuResponse)
    }, function(error) {
        return res.status(404).send(error)
    })
})

router.put('/:id', function (req, res) {
})

router.delete('/:id', function (req, res) {

})

module.exports = router;