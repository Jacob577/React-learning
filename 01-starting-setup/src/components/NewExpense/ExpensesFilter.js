import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const [enteredFilter, setEnteredFilter] = useState("");

  // const changeExpensesFilter = (event) => {
  //   // setEnteredFilter(event.target.value);
  //   setEnteredFilter(event.target.value);
  //   console.log("The dropdown has changed! from Filter", enteredFilter);
  //   props.displayExpenseFilter(enteredFilter);
  // };
  const dropdownChangeHandler = (event) => {
    //Because we are listening to the event, the useState function will not 
    //be updated. Therefore we're using the event to listen to! 
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

// How to pass data to parent
// step 1. in the component that the change occurs, 
// create an onChange function and in the changeHandler,
// use props.onChange(event.target.value)

//Step 2:
// In the parent component, create a ChangeHandler and add as an attribute to the
// onChange attribute in the JSX. 

// Step 3:
// to make it stateful: pass in the selected value as a state using useState,
// pass the value into the attribute. 

// Step 4:
// pass in the props value into the child component

//Conseptual:
// When passing a value to a prop, we are adding a property to the object.
// props.<something> is thereafter the property that can be used in parent function.
// In parent when calling the child props, add the prop name in component line.

export default ExpensesFilter;
