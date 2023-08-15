import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  // here ahat we have done with the variables is that we have removed hard coded text and added them in order to make them dynamic , this is to understand better that we can now use props and insted of storing data in these variables we can just recieve them via props

  return (
    // the things about jsx is that we can replace hard coded text with curly braces , we can even put javascript logic inside them, eg anything in js can be put inside these braces
    // <h1> Hey </h1>
    // <h1> {Hey} </h1>
    // <h1> {1+1} </h1>
    // we can make our components reusable
    // props are one of the most important things they make our components reusable , we just used these culry braces to add dynamic values inside jsx, so we will add props.vales inside these curly braces , that's how we will give different values to the same componenet and make it reusable
    // Props are the attributes of your custom HTML elements , i.e Componenets
    // componenets should recive the values from outside through props or exports , but mainly props so the variables will be stored inside the app.js file
    <>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        {/* Since date is a date object we can't just output the date object as such as a string , we can use toISOString to output date object as a string */}
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
