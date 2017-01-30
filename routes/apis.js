var express = require('express');
var router = express.Router();
var db = require("../models");

/* GET home page. */
router.get('/users', function(req, res, next) {
  db.User.findAll({raw:true}).then(function(users_data){
    res.json(users_data);
  })
});

router.get('/users/:id', function (req, res, next) {
  db.User.findOne({
    where: {id: req.params.id}
  }).then(function(user){
    res.json(user);
  })
})


router.delete('/users/:id', function(req, res, next) {
  db.User.findById(req.params.id).then(function(result){
    result.destroy().then(function(){
      res.send('Data with id: '+req.params.id+' has been deleted')
    })
  })
});

router.post('/users', function(req, res, next) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      age: req.body.age}).then(function(user){
      res.json(user);
    })
});

router.put('/users/:id', function(req, res, next) {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age}).then(function(user){
    res.json(user);
  })
});

module.exports = router;
