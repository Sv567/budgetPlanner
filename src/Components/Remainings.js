import React,{useContext} from 'react'
import { AppContext } from './Context/Appcontext'

const Remainings = () => {
    const{expense, budget} = useContext(AppContext)
    const totalExpense = expense.reduce((total , item) => {
        return (total + item.cost)
    },0)
  return (
    <div>
        <span>Remainings : {budget- totalExpense}</span>
    </div>
  )
}

export default Remainings