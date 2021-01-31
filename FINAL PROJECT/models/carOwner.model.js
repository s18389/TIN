const mongoose = require('mongoose')

const CarOwnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    surname: {
        type: String,
        required: 'This field is required'
    },
    phone: {
        type: Number,
        required: 'This field is required'
    }
});

mongoose.model("CarOwner", CarOwnerSchema)
