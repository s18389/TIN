const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const CarOwner = mongoose.model('CarOwner', null, 'carOwner')

router.get('/', (req, res) => {
    res.render('carOwner/addOrEdit', {
        viewTitle: 'Insert Car Owner'
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
    const carOwner = new CarOwner();
    carOwner.name = req.body.name;
    carOwner.surname = req.body.surname;
    carOwner.phone = req.body.phone;
    carOwner.save((err)=>{
        if(!err){
            res.redirect('carOwner/list')
        }else {
            console.log('Error inserting ' + err)
        }
    })
}

function updateRecord(req, res){
    CarOwner.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err) =>{
        if(!err){
            res.redirect("carOwner/list")
        }else {
            console.log("Error updating" + err)
        }
    })
}

router.get('/list', ((req, res) => {
    CarOwner.find({}, ((err, docs) => {
        if(!err){
            console.log("FIND STH!!!")
            res.render("carOwner/list",{
                list: docs})
        }else {
            console.log("Error retrieval" + err)
        }
    }))
}))

router.get('/:id', ((req, res) => {
    CarOwner.findById(req.params.id, (err, doc) =>{
        if(!err){
            res.render("carOwner/addOrEdit", {
                viewTitle: "Update Car Owner",
                carOwner: doc,
            })
            console.log(doc)
        }
    })
}))

router.get('/delete/:id', ((req, res) => {
    CarOwner.findByIdAndRemove(req.params.id, (err) =>{
        if(!err){
            res.redirect("../../carOwner/list")
        }else {
            console.log("Error deletion" + err)
        }
    })
}))

module.exports = router
