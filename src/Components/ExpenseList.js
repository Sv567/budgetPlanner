import React,{useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from './Context/Appcontext'

const ExpenseList = () => {
    const {expense} = useContext(AppContext);
   
  return (
    <div>
        {expense.map(expense =>(
           <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
    </div>
  )
}

export default ExpenseList ;