const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    mark: {
        type: String,
        required: 'This field is required'
    },
    model: {
        type: String,
        required: 'This field is required'
    },
    year: {
        type: Number,
        required: 'This field is required'
    },
    carOwner: {
        type: String,
        required: 'This field is required'
    }
});

mongoose.model("Car", carSchema)
