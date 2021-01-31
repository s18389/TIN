const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://jackob:michalski13@iamdatabasexd.kafm8.mongodb.net/CarService?retryWrites=true&w=majority", {
 useNewUrlParser: true
},
    err => {
    if(!err){
        console.log("Connected to DB")
    }else {
        console.log("Error connecting to DB" + err)
    }
    })

require('./car.model')
require('./carService.model')
require('./carOwner.model')
