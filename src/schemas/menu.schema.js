const mongoose = require('mongoose');

exports.MenuSchema = new mongoose.Schema({
    username: { type: String, unique: true},
    menuItem : [String],
}, {
    collection: 'menus'
})