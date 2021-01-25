import { useContext } from "react";
import { appContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constant/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(appContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);

  const totalPerType = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const currCategories =
    title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    const category = currCategories.find((c) => c.type === t.category);

    if (category) {
      category.amount += t.amount;
    }
  });

  const filteredCategories = currCategories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  console.log(chartData);
  return { chartData, totalPerType };
};

export default useTransactions;
