const express = require('express');
const { getTransactions } = require('../controllers/transaction');
const router = express.Router();

router.get('/', getTransactions);

module.exports = router;
