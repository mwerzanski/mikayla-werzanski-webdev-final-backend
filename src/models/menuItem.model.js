const mongoose = require('mongoose');

const MenuItemSchema = require('../schemas/menuItem.schema').MenuItemSchema;

const MenuItemModel = mongoose.model('MenuItem', MenuItemSchema);

function createMenuItem(menuItem) {
    return MenuItemModel.create(menuItem);
}

function findMenuItem(_id) {
    return MenuItemModel.findOne({
        _id: _id,
    });
}

function getAllMenuItems() {
    return MenuItemModel.find().exec();
}

function deleteMenuItem(menuItemTitle) {
    return MenuItemModel.deleteOne(menuItemTitle);
}

function updateMenuItem(menuItemTitle, menuUpdate) {
    return MenuItemModel.findOneAndUpdate(menuItemTitle, menuUpdate);
}

module.exports = {
    createMenuItem,
    findMenuItem,
    getAllMenuItems,
    deleteMenuItem,
    updateMenuItem,
};
