const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    age: {
        type: Number
    },
    mobile :{
        type:Number,
        required:true

    },

    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    address:{
        type: String,

    },
    salary:{
        type:Number,
        required:true
    }

});

// Create Person Model
const Person = mongoose.model('Person',personSchema);
module.exports=Person;