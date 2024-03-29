import React,{useContext} from 'react'
import { AppContext } from './Context/Appcontext';

const TotalExpense = () => {
    const {expense} = useContext(AppContext)
    const totalExpense = expense.reduce((total , item) => { 
        return (total += item.cost)
    },0)
  return (
    <div>
        <span>Total Expense : {totalExpense}</span>
    </div>
  )
}

export default TotalExpense;