const express = require('express');
const router = express.Router();
const Story = require('../models/story');
const User = require('../models/user');
const Contribution = require('../models/contribution');




router.get('/stories', (req, res, next) => {
  Story.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/stories', (req, res, next) => {
  console.log(req);
  if (req.body) {
    Story.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});


router.delete('/stories/:id', (req, res, next) => {
    Story.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/users', (req, res, next) => {
  User.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/users', (req, res, next) => {
  if (req.body) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});


router.delete('/users/:id', (req, res, next) => {
    User.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/contributions', (req, res, next) => {
  Contribution.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/contributions', (req, res, next) => {
  if (req.body) {
    Contribution.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});


router.delete('/contributions/:id', (req, res, next) => {
    Contribution.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;