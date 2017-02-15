var db = require("../models");
var passwordHash = require('password-hash');

module.exports = {
  list: function(req, res, next){
    db.User.findAll().then(function(result){
    res.send(result);
    })
  },

  find: function(req, res, next){
    db.User.findOne({
      where: {id: req.params.id}
    }).then(function(result){
      res.json(result);
    })
  },

  delete: function(req, res, next){
    db.User.findById(req.params.id).then(function(result){
      result.destroy().then(function(){
        res.send('Data with id: '+req.params.id+' has been deleted')
      })
    })
  },

  add: function(req, res, next){
    db.User.create({
      username: req.body.username,
      password: passwordHash.generate(req.body.password),
      name: req.body.name,
      age: req.body.age}).then(function(user){
      res.json(user);
    })
  },

  update: function(req, res, next){
    db.User.findById(req.params.id).then(function(result){
      result.update({
        username: req.body.username,
        password: passwordHash.generate(req.body.password),
        name: req.body.name,
        age: req.body.age}).then(function(user){
        res.json(user);
      })
    })
  }

}
