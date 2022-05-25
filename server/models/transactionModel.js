const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  amount: {
    type: String,
    required: [true, 'Please add an amount']
  },
}, {
  timestamps: true
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;
