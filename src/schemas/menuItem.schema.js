const mongoose = require('mongoose');

exports.MenuItemSchema = new mongoose.Schema({
    title: {
        type: String, unique: true
    },
    text: String
}, {
    collection: 'menuItems'
})