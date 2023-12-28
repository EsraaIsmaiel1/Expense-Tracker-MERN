const Transaction = require('../models/Transaction.js');

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      succuss: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      succuss: false,
      error: 'Server error',
    });
  }
};
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      succuss: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(
        (value) => value.message
      );
      return res.status(400).json({
        succuss: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        succuss: false,
        error: 'Server error',
      });
    }
  }
};

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        succuss: false,
        error: 'Transaction not found',
      });
    }
    return res.status(200).json({
      succuss: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      succuss: false,
      error: 'Server error',
    });
  }
};
