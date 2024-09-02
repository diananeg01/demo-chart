import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";

export default function ExpensesList(props: any) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map(
        (expense: {
          title: string;
          amount: number;
          date: Date;
          id: string;
        }) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ),
      )}
    </ul>
  );
}
