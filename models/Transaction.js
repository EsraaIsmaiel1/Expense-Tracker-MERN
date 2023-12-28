const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: [true, 'Please enter some text'],
    },
    amount: {
      type: Number,
      required: [true, 'Please enter a positive or negative number'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', TransactionSchema);
