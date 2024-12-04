const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');
const { createVisit } = require('../controllers/visitController');
const { getAllVisits } = require('../controllers/visitController');

router.post('/add', createVisit);
router.get('/allVisits', getAllVisits);
//router.patch('/visit/:id', updateVisitStatus);

module.exports = router;
