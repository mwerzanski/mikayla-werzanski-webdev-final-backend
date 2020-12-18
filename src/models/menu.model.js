const mongoose = require('mongoose');

const MenuSchema = require('../schemas/menu.schema').MenuSchema;

const MenuModel = mongoose.model('Menu', MenuSchema);

function createMenu(menuList) {
    return MenuModel.create(menuList);
}

function findMenu(username) {
    return MenuModel.findOne({
        username: username,
    });
}

function getAllMenus() {
    return MenuModel.find().exec();
}

function deleteAllMenus() {
    return MenuModel.deleteMany().exec();
}

function updateMenuItem(username, menuUpdate) {
    return MenuModel.findOneAndUpdate(username, menuUpdate);
}

module.exports = {
    createMenu,
    findMenu,
    getAllMenus,
    deleteAllMenus,
    updateMenuItem,
};
