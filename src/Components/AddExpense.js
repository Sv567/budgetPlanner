import React, { useState ,useContext} from 'react'
import { AppContext } from './Context/Appcontext';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {
    const {dispatch} = useContext(AppContext)
    const [name , setName] = useState('');
    const [cost , setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const expense= {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost) ,
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload:expense ,
        })
    }
    return (
        <>
            <form>
                <div className='addExpense'>
                    <label>Name :</label>
                    <input required='required' type='text' id='name' value={name} placeholder='Enter Name. . .'  onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='addExpense'>
                    <label>Cost : </label>
                    <input required='required' type='number' id='cost' value={cost} placeholder='Enter Cost. . .' onChange={(e)=>setCost(e.target.value)}/>
                </div>
            </form>
            <button onClick={onSubmit} className='save-btn'>Save</button>
        </>
    )
}

export default AddExpense