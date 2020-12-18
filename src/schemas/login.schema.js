const mongoose = require('mongoose');

exports.UserSchema = new mongoose.Schema(
    {
        firstName: String,
        username: {
            type: String,
            unique: true,
        },
        password: String,
        admin: Boolean,
        foundDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        collection: 'users',
    }
);
