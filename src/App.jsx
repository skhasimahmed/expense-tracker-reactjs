import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
};

export default App;
