const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');

router.post('/visit', visitController.createVisit);
router.get('/visits', visitController.getVisits);
router.patch('/visit/:id', visitController.updateVisitStatus);

module.exports = router;
