const express = require('express');
const bodyParser = require('body-parser');

const Books = require('../models/books');
const { json } = require('body-parser');

const bookRouter = express.Router();
bookRouter.use(bodyParser.json());

bookRouter.route("/")
    .get((req, res, next) => {
        Books.find()
            .then((books) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(books);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Books.create(req.body)
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = bookRouter;