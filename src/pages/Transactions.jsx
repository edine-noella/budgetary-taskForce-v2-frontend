import { useState } from "react";

function Transactions() {

  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");


    const initialTransactions = [
        {
        id: 1,
        type: "income",
        amount: 1000,
        category: "Salary",
        date: "2021-09-01",
        },
        {
        id: 2,
        type: "expense",
        amount: 100,
        category: "Food",
        date: "2021-09-02",
        },
    ];

 
    setTransactions(initialTransactions);
    

  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold">Transactions</h1>

    <form  className="mt-6">
      <input
        type="number"
        value= {amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="p-3 border rounded mr-2"
      />
      <select
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
        className="p-3 border rounded mr-2"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="p-3 border rounded mr-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-3 border rounded"
      />
      <button type="submit" className="p-3 bg-blue-500 text-white rounded ml-2">Add Transaction</button>
    </form>

    <div className="mt-6">
      <h2 className="text-xl font-semibold">Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type} - ${transaction.amount} ({transaction.category}) on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Transactions