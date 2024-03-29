import React from 'react'
import { createContext, useReducer } from 'react'


const reducer = (state , action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expense:[...state.expense , action.payload],
            }

        case 'DLT_EXPENSE' :
            return {
                ...state,
                expense: state.expense.filter(((expense) => expense.id !== action.payload)),
            }
        default:
            return state ;
    }
}

const initialState = {
    budget:3000,
    expense: [
       
    ],
}

export const AppContext = createContext();

const AppProvider = (props) => {
    const[state , dispatch] = useReducer(reducer , initialState)
  return (
    <AppContext.Provider value={{
        budget:state.budget,
        expense:state.expense,
        dispatch,
    }}
    >
        {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider