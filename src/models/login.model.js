const mongoose = require('mongoose');

const UserSchema = require('../schemas/login.schema').UserSchema

const UserModel = mongoose.model("User", UserSchema);

function createUser(user) {
    return UserModel.create(user);
}

function findUser(username) {
    return UserModel.findOne({
        username: username
    }).exec()
}

function getAllUsers() {
    return UserModel.find().exec();
}

module.exports = {
    findUser,
    createUser, 
    getAllUsers,
}