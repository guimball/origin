const express = require('express');
const router = express.Router();
const interestController = require('../controllers/interestController');

router.post('/interest', interestController.createInterest);

module.exports = router;
