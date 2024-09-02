import "./Expense.css";
import React, { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../chart/ExpensesChart";

export default function Expense(props: any) {
  const [year, setYear] = useState("2022");

  let filteredYearText;

  if (year === "2019") {
    filteredYearText = "2020, 2021 & 2022";
  } else if (year === "2020") {
    filteredYearText = "2019, 2021 & 2022";
  } else if (year === "2021") {
    filteredYearText = "2019, 2020 & 2022";
  } else {
    filteredYearText = "2019, 2020 & 2021";
  }

  const filteredExpenses = props.expenses.filter(
    (expense: any) => {
      return expense.date.getFullYear().toString() === year;
    },
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          dropdownValue={year}
          onChangeYear={(y: string) => setYear(y)}
        />
        <p>* Data of years {filteredYearText} is hidden.</p>
          <ExpensesChart expenses={filteredExpenses} />
      </Card>
      <Card className="expenses">
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
