import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const checkCharacters = (str) => {
    const max = 35;
    return str.length > max ? str.substring(0, max) + "..." : str;
  };

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      key={transaction.id}
      className={transaction.amount < 0 ? "minus" : "plus"}
    >
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
        {sign}₹{Math.abs(transaction.amount)}
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
