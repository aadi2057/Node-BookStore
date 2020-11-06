var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');

var router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
    .then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.post('/register', (req, res, next) => {
    User.findOne({username: req.body.username})
      .then((user) => {
        if(user) {
          var err = new Error('User ' + req.body.username + ' already exists');
          err.status = 403;
          next(err);
        }
        else {
          return User.create(req.body)
        }
      })
      .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({status: 'Registration Successful', user: user});
      }, (err) => next(err))
      .catch((err) => next(err));
})

router.post('/login', (req, res, next) => {

})

module.exports = router;
