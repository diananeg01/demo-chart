import "./ExpenseForm.css";
import { BaseSyntheticEvent, useState } from "react";

export default function ExpenseForm(props: any) {
  const [form, setForm] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const formChangeHandler = (identifier: string, value: any) => {
    if (identifier === "title") {
      setForm((prevState) => {
        return {
          ...prevState,
          title: value,
        };
      });
    } else if (identifier === "amount") {
      setForm((prevState) => {
        return {
          ...prevState,
          amount: +value,
        };
      });
    } else if (identifier === "date") {
      setForm((prevState) => {
        return {
          ...prevState,
          date: value,
        };
      });
    }
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault(); // for not reloading the page

    console.log(form);
    props.onSaveExpenseData(form);
    setForm((prevState) => {
      return {
        title: "",
        amount: 0,
        date: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(event) => formChangeHandler("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            onChange={(event) =>
              formChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={form.date}
            onChange={(event) => formChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
