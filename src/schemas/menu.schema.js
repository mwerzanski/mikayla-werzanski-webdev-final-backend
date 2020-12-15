const mongoose = require('mongoose');

exports.MenuSchema = new mongoose.Schema({
    username: {
        type: String, unique: true
    },
    menu : [{name: String, text: String}]
}, {
    collection: 'menus'
})