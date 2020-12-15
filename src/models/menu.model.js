const mongoose = require('mongoose');

const MenuSchema = require('../schemas/menu.schema').MenuSchema

const MenuModel = mongoose.model("Menu", MenuSchema);

function createMenu(menuList) {
    return MenuModel.create(menuList);
}

function findMenu(_id) {
    return MenuModel.findOne({
        _id: _id
    })
}

function getAllMenus() {
    return MenuModel.find().exec();
}

module.exports = {
    createMenu,
    findMenu, 
    getAllMenus,
}