import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const transactionSubmitHandler = (e) => {
    e.preventDefault();

    if (!text.trim() || !amount.trim()) {
      toast.error("Please add transaction text and amount.");
      return;
    }

    if (text.length < 5) {
      toast.error("Text cannot be shorter than 5 characters.");
      return;
    }

    if (amount == 0) {
      toast.error("Amount cannot be 0.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: new Date(),
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");

    toast.success("Transaction added successfully.");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={transactionSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            autoFocus
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            step={"0.1"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
