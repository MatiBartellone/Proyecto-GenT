const mongoose = require('mongoose');

const esquemaUser = new mongoose.Schema({
    //_id: {type: String},
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},

})

module.exports = mongoose.model('User', esquemaUser)