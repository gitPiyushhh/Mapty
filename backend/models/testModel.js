const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    text: {
        type: String
    }, 
    num: {
        type: Number
    }
});


const Test = mongoose.model('Test', testSchema);

module.exports = Test;