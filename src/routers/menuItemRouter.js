const express = require('express');
const { getAllMenuItems, createMenuItem, findMenuItem, deleteMenuItem, updateMenuItem } = require('../models/menuItem.model');
const router = express.Router();

router.get('/', function (req, res) {
    return getAllMenuItems()
        .then(function (menuResponse) {
            res.status(200).send(menuResponse);
        }, function (error) {
            res.status(404).send("Error getting users");
        })
})

router.post('/', function (req, res) {
    const newItem = req.body;
    createMenuItem(newItem).then(function(menuResponse) {
        return res.status(200).send(menuResponse)
    }, function(error) {
        return res.status(404).send(error)
    })
})

router.put('/:title', function (req, res) {
    const updateItem = req.params.title;
    const updated = req.body;
    updateMenuItem(updateItem, updated).then(function(menuResponse) {
        return res.status(200).send(menuResponse)
    }, function(error) {
        return res.status(404).send(error)
    })
})

router.delete('/', function (req, res) {
    const deleteItem = req.body;
    deleteMenuItem(deleteItem).then(function(menuResponse) {
        return res.status(200).send(menuResponse)
    }, function(error) {
        return res.status(404).send(error)
    })
})

module.exports = router;