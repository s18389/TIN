const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Car = mongoose.model('Car', null, 'car')

router.get('/', (req, res) => {
    res.render('car/addOrEdit', {
        viewTitle: 'Insert Car'
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
    const car = new Car();
    car.mark = req.body.mark;
    car.model = req.body.model;
    car.year = req.body.year;
    car.carOwner = req.body.carOwner;
    car.save((err, doc)=>{
        if(!err){
            res.redirect('car/list')
        }else {
            console.log('Error inserting ' + err)
        }
    })
}

function updateRecord(req, res){
    Car.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) =>{
        if(!err){
            res.redirect("car/list")
        }else {
            console.log("Error updataing" + err)
        }
    })
}

router.get('/list', ((req, res) => {
    Car.find({}, ((err, docs) => {
        if(!err){
            console.log("FIND STH!!!")
            res.render("car/list",{
                list: docs})
        }else {
            console.log("Error retrieval" + err)
        }
    }))
}))

router.get('/:id', ((req, res) => {
    Car.findById(req.params.id, (err, doc) =>{
        if(!err){
            res.render("car/addOrEdit", {
                viewTitle: "Update car",
                car: doc,
            })
            console.log(doc)
        }
    })
}))

router.get('/showInfo/:id', ((req, res) => {
    const Owner = mongoose.model('CarOwner', null, 'carOwner')
    Owner.findOne({_id: req.params.id}, req.body, ((err, docs) => {
        if(!err){
            res.render("carOwner/list",{
                list: docs})
        }else {
            console.log("Error retrieval" + err)
        }
    }))
}))

router.get('/delete/:id', ((req, res) => {
    Car.findByIdAndRemove(req.params.id, (err, doc) =>{
        if(!err){
            res.redirect("../../car/list")
        }else {
            console.log("Error deletion" + err)
        }
    })
}))

module.exports = router
