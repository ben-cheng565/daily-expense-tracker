import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 60,
    category: "Bills",
    type: "Expense",
    date: "2021-01-04",
    id: "42b349e7-c2ce-4c27-85fb-cbcac569555f",
  },
  {
    amount: 200,
    category: "Salary",
    type: "Income",
    date: "2021-01-03",
    id: "4177d20d-bcb9-4eba-b42f-14321937722c",
  },
  {
    amount: 100,
    category: "Business",
    type: "Income",
    date: "2021-01-03",
    id: "cde29121-94cc-4547-aa14-cfe4ff9fba8d",
  },
];

export const appContext = createContext(initState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Income" ? acc + currVal.amount : acc - currVal.amount,
    0
  );

  return (
    <appContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </appContext.Provider>
  );
};
