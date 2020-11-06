const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');


const User = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);
