const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const tambolaSchema = new Schema({
    ticket:{
        type:Array
    }
});

const TambolaModel = mongoose.model('tambola', tambolaSchema);
module.exports = TambolaModel;