const mongoose = require('mongoose');

const UserSchema = require('../schemas/login.schema').UserSchema

const UserModel = mongoose.model("User", UserSchema);

function createUser(user) {
    return UserModel.create(user);
}

function findUser(username) {
    return UserModel.findOne({
        username: username
    })
}

function findUserFromId(id) {
    return UserModel.findOne({
        _id: id
    })
}

function getAllUsers() {
    return UserModel.find().exec();
}

function updateUser(_id, userUpdate) {
    return UserModel.findOneAndUpdate(_id, userUpdate);
}

module.exports = {
    findUser,
    createUser, 
    getAllUsers,
    findUserFromId,
    updateUser
}