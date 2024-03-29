import React, { useContext } from 'react'
import { AppContext } from './Context/Appcontext'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext)

    const handleDlt = () => {
        dispatch({
            type: 'DLT_EXPENSE',
            payload: props.id
        })
    }

    return (
        <div className='expense-ele'>
            <div className='expense-list'><span style={{
                fontSize: '25px'
            }}>{props.name} </span>
                <div className='list-ele'>
                    <span>{props.cost}</span>
                    <span><button onClick={handleDlt} style={{
                        backgroundColor: 'black',
                        border: 'none',
                        borderRadius: '50%'
                    }}>❌</button></span>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem