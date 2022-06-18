const express = require('express');
const router = express.Router();

router.get('/stories', (req, res, next) => {
  Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/stories', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});


router.delete('/stories/:id', (req, res, next) => {
    Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;