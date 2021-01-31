const mongoose = require('mongoose')

const carServiceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: 'This field is required'
    },
    dateOfFinish: {
        type: String,
        required: 'This field is required'
    },
    totalPrice: {
        type: Number,
        required: 'This field is required'
    },
    serviceCar:{
        type: String,
        required: 'This field is required'
    }
});

mongoose.model("CarService", carServiceSchema)
