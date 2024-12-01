const express = require('express');
const router = express.Router();
const proposalController = require('../controllers/proposalController');

router.post('/proposal', proposalController.createProposal);
router.get('/proposals', proposalController.getProposals);
router.patch('/proposal/:id', proposalController.updateProposalStatus);

module.exports = router;
