import "./ExpenseItem.css";

function ExpenseItem(props) {
  // in regular js we use paramenters for passing data into functions

  // since we will be using props we can easily comment out these
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  // here what we have done with the variables is that we have removed hard coded text and added them in order to make them dynamic , this is to understand better that we can now use props and insted of storing data in these variables we can just recieve them via props

  return (
    // the things about jsx is that we can replace hard coded text with curly braces , we can even put javascript logic inside them, eg anything in js can be put inside these braces
    // <h1> Hey </h1>
    // <h1> {Hey} </h1>
    // <h1> {1+1} </h1>
    // we can make our components reusable
    // props are one of the most important things they make our components reusable , we just used these culry braces to add dynamic values inside jsx, so we will add props.vales inside these curly braces , that's how we will give different values to the same componenet and make it reusable
    // Props are the attributes of your custom HTML elements , i.e Componenets
    // componenets should recive the values from outside through props or exports , but mainly props so the variables will be stored inside the app.js file

    // We can pass data to the custom component by adding a attribute. And inside of that component, we can then get access to all these attributes which might have been set on our custom component. which might have been set on our custom component. Again, we're basically building our own custom HTML elements. our own custom HTML elements. And just as HTML elements can have attributes, it turns out that with React, our own custom components can also have attributes. our own custom components can also have attributes. There, this concept is just called props instead of attributes. instead of attributes. And props simply stands for properties. We can set properties of our own custom components. Now, how does this props concept work though?

    <>
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        {/* Since date is a date object we can't just output the date object as such as a string , we can use toISOString to output date object as a string */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          {/* React will ensure that we get one parameter in every component , like we're doing it here for ExpenseItem. And that one parameter will be an object which holds all the received attributes as properties, hence the name props for the overall concept. Therefore, we get one parameter, and you can name this parameter whatever you want. eg. You could name it data. But, typically, it's named props to make it clear that this is this is an object which holds all the values we get for the attributes on our custom element i.e components.
          
          And to be precise, we get key-value pairs in this props object here which is passed in by React automatically. The keys will be the attribute names defined here, so title, amount, and date in my case {Key is the name you picked for your attribute} And the values, of course, will be the values set here.
          
          title={expenses[0].title}
          Key  : Value  pair
          So if I now wanna output the title received here in this h2 tag, I can now access props.title like this */}
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
