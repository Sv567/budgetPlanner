import AddExpense from "./Components/AddExpense";
import Budget from "./Components/Budget";
import ExpenseList from "./Components/ExpenseList";
import Remainings from "./Components/Remainings";
import AppProvider from "./Components/Context/Appcontext";
import TotalExpense from "./Components/TotalExpense";
import './Components/Budget.css'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>My Budget Planner</h1>
        <div className="budget-ele">
          <div style={{
            border:'0px solid black',
            padding:'.7rem',
            backgroundColor:'lightgrey',
            borderRadius:'5px'
          }}>
            <Budget />
          </div>
          <div style={{
            border:'0px solid black',
            padding:'.7rem',
            borderRadius:'5px',
            backgroundColor:'lightgreen',
          }}>
            <Remainings />
          </div>
          <div style={{
            border:'0px solid black',
            padding:'.7rem',
            backgroundColor:'orange',
            borderRadius:'5px'
          }}>
            <TotalExpense />
          </div>
        </div>

        <h2>Expense List</h2>
        <h4>Add data here . . . </h4>
        <div>
          <ExpenseList />
        </div>
        <br/>
        <h2>Add Expenses</h2>
        <div>
          <AddExpense />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
