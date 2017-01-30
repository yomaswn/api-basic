var express = require('express');
var router = express.Router();
var db = require("../models");

/* GET home page. */
router.get('/users', function(req, res, next) {
  db.User.findAll({raw:true}).then(function(users_data){
    res.json({users:users_data});
  })
});

// router.post('/', function(req, res, next) {
//     db.Todo.create({title: req.body.title,is_complete:false,createdAt:new Date(),UserId:req.body.UserId}).then(function(tod){
//       res.redirect('/')
//     })
// });
// router.get('/update/:id', function(req, res, next) {
//   db.Todo.findById(req.params.id).then(function(result){
//     res.render('update',{list: result})
//   })
// });
//
// router.post('/updated', function(req, res, next) {
//   db.Todo.findById(req.body.id).then(function(result){
//     result.update({title:req.body.title,is_complete:req.body.complete,updatedAt:new Date()}).then(function(){
//       res.redirect('/')
//     })
//
//   })
// });
//
// router.get('/delete/:id', function(req, res, next) {
//   db.Todo.findById(req.params.id).then(function(result){
//     result.destroy().then(function(){
//       res.redirect('/')
//     })
//
//   })
// });

module.exports = router;
