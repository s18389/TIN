const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const CarService = mongoose.model('CarService', null, 'service')

router.get('/', (req, res) => {
    res.render('carService/addOrEdit', {
        viewTitle: 'Insert service'
    })
})

router.post('/', (req, res) => {
    if(req.body._id === '') {
        insertRecord(req, res)
    }else {
        updateRecord(req, res)
    }
})

function insertRecord(req, res){
    const carService = new CarService();
    carService.serviceName = req.body.serviceName;
    carService.dateOfFinish = req.body.dateOfFinish;
    carService.totalPrice = req.body.totalPrice;
    carService.serviceCar = req.body.serviceCar;
    carService.save((err, doc)=>{
        if(!err){
            res.redirect('carService/list')
        }else {
            console.log('Error inserting ' + err)
        }
    })
}

function updateRecord(req, res){
    CarService.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) =>{
        if(!err){
            res.redirect("carService/list")
        }else {
            console.log("Error updating" + err)
        }
    })
}

router.get('/list', ((req, res) => {
    CarService.find({}, ((err, docs) => {
        if(!err){
            console.log("FIND STH!!!")
            res.render("carService/list",{
                list: docs})
        }else {
            console.log("Error retrieval" + err)
        }
    }))
}))

router.get('/showInfo/:id', ((req, res) => {
    const Car = mongoose.model('Car', null, 'car')
    Car.findOne({_id: req.params.id}, req.body, ((err, docs) => {
        if(!err){
            res.render("car/list",{
                list: docs})
        }else {
            console.log("Error retrieval" + err)
        }
    }))
}))

router.get('/:id', ((req, res) => {
    CarService.findById(req.params.id, (err, doc) =>{
        if(!err){
            res.render("carService/addOrEdit", {
                viewTitle: "Update service",
                carService: doc,
            })
            console.log(doc)
        }
    })
}))

router.get('/delete/:id', ((req, res) => {
    CarService.findByIdAndRemove(req.params.id, (err, doc) =>{
        if(!err){
            res.redirect("../../carService/list")
        }else {
            console.log("Error deletion" + err)
        }
    })
}))

module.exports = router
