import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (target) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: target.value,
        })
    }

    return (
        <div >
            <select className='form-select form-select-lg mb-3' name="Currency" id="Currency" onChange={event => changeCurrency(event.target)}>
                <option value="$">Currency ($ Dollar)</option>
                <option value="£">Currency (£ Pound)</option>
                <option value="€">Currency (€ Euro)</option>
                <option value="₹">Currency (₹ Ruppee)</option>
            </select>

        </div>
    );
};
export default Currency;