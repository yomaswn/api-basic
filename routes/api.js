var express = require('express');
var router = express.Router();
var userController = require("../controllers/users")

router.get('/users', userController.list)

router.get('/users/:id', userController.find)

router.delete('/users/:id',userController.delete)

router.post('/users', userController.add)

router.put('/users/:id', userController.update)

module.exports = router;
