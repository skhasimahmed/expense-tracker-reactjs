import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const checkCharacters = (str) => {
    const max = 25;
    return str.length > max ? str.substring(0, max) + "..." : str;
  };

  return (
    <li
      key={transaction.id}
      className={transaction.amount < 0 ? "minus" : "plus"}
    >
      <div
        className={`ribbon ${
          transaction.amount > 0 ? "ribbon-credit" : "ribbon-debit"
        }`}
      >
        {transaction.amount > 0 ? "Credit" : "Debit"}
      </div>
      <div>
        <p style={{ margin: 0 }}>{checkCharacters(transaction.text)}</p>

        <span
          style={{
            fontSize: "11px",
            fontStyle: "italic",
            fontWeight: 500,
            color: "gray",
          }}
        >
          {moment(transaction.date).fromNow()}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        ₹{Math.abs(transaction.amount)}
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
};
