import axios from "axios";
import React, { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import "./transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    const transactionsRes = await axios.get(
      "http://localhost:5000/transaction/"
    );
    setTransactions(transactionsRes.data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="page-transactions">
      <TransactionForm getTransactions={getTransactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;
