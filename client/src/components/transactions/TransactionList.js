import React from "react";

import "./transactions.css";

function TransactionList({ transactions }) {
  function renderTransactions() {
    return transactions.map((transaction, i) => {
      return (
        <tr key={i}>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
        </tr>
      );
    });
  }

  return (
    <div className="transactions--list">
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        {renderTransactions()}
      </table>
    </div>
  );
}

export default TransactionList;
