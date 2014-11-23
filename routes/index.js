var express = require('express');
var router = express.Router();
var meetupController = require('../app/controllers/MeetupController');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
    res.sendFile('/views/index.html');
});

router.post('/meetup',meetupController.create);
router.get('/meetup',meetupController.getAll);
router.get('/meetup/:id',meetupController.get);
router.put('/meetup/:id',meetupController.update);
router.delete('/meetup/:id',meetupController.delete);
module.exports = router;
