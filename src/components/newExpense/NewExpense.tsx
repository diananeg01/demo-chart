import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props: any) {
  const saveExpenseDataHandler = (expenseData: {
    title: string;
    amount: number;
    date: Date;
  }) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
