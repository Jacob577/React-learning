import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from 'react';

//Remember to use the useState and its appropriate 
//Handler. this is instead of using regular on click events,
//Otherwise it wont update the DOM and the HTML will remain the same!

function ExpenseItem(props) {
  //when we are working with useState, the first is the value,
  //and the second is the setter
  // const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>    
    </Card>
  );
}

export default ExpenseItem;
