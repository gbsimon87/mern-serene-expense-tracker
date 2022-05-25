import axios from "axios";
import React, { useState } from "react";

function TransactionForm({ getTransactions }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const transactionData = {
        description,
        amount,
      };
      console.log(transactionData);
      await axios.post("http://localhost:5000/transaction/", transactionData);
      getTransactions();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div class="transactions--form">
      <form className="form" onSubmit={saveTransaction}>
        <div className="form__inputContainer">
          <input
            type="text"
            placeholder="Transaction name"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>
        <div className="form__inputContainer">
          <input
            type="number"
            placeholder="Transaction number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </div>
        <div className="form__inputContainer">
          <button className="change-to-button-primary" type="submit">
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
