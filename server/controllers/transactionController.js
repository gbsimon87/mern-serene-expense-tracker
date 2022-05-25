const Transaction = require("../models/transactionModel")

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}

const createTransaction = async (req, res) => {
  try {
    const { description, amount } = req.body;
    // TODO: check req.user
    // TODO: check req.cookies

    if (!description) {
      res.status(400)
      throw new Error('Please add an description')
    }

    if (!amount) {
      res.status(400)
      throw new Error('Please add an  amount')
    }

    const transaction = await Transaction.create({
      description,
      amount,
      // user
    });

    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}

module.exports = {
  getTransactions,
  createTransaction
}
