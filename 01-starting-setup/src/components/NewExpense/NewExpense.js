import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

//Below, we are passing a function down into the ExpenseForm, 
//It is a super common use case for React in RW

  return (
    <div className="new-expense">
      {!isEditing && <button 
      onClick={startEditingHandler}>
        Add New Expence
        </button>}

      {isEditing && (
      <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler} 
      onCancel={stopEditingHandler}
      />
      )}
    </div>
  );
}

export default NewExpense;
