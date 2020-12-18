const express = require('express');
const {
    getAllMenus,
    createMenu,
    findMenu,
    deleteAllMenus,
    updateMenuItem,
} = require('../models/menu.model');
const router = express.Router();

router.get('/', function (req, res) {
    return getAllMenus().then(
        function (menuResponse) {
            res.status(200).send(menuResponse);
        },
        function (error) {
            res.status(404).send('Error getting users');
        }
    );
});

router.get('/:username', function (req, res) {
    const username = req.params.username;

    findMenu(username).then(
        function (menuResponse) {
            return res.status(200).send(menuResponse);
        },
        function (error) {
            return res.status(404).send(error);
        }
    );
});

router.post('/', function (req, res) {
    const newMenu = req.body;
    createMenu(newMenu).then(
        function (menuResponse) {
            return res.status(200).send(menuResponse);
        },
        function (error) {
            return res.status(404).send(error);
        }
    );
});

router.put('/:username', function (req, res) {
    const username = req.params.username;
    const updated = req.body;
    updateMenuItem(username, updated).then(
        function (menuResponse) {
            return res.status(200).send(menuResponse);
        },
        function (error) {
            return res.status(404).send(error);
        }
    );
});

router.delete('/', function (req, res) {
    deleteAllMenus().then(
        function (menuResponse) {
            return res.status(200).send(menuResponse);
        },
        function (error) {
            return res.status(404).send(error);
        }
    );
});

module.exports = router;
