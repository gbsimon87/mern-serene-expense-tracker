const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  getTransactions,
  createTransaction
} = require('../controllers/transactionController');

router.route('/').get(auth, getTransactions).post(auth, createTransaction);

module.exports = router;
