import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencyField.css'

const CurrencyField = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    return (
        <div>
            <div>

            <div style={{ marginLeft: '2rem' }}>
                <select class="dropDown" required id="inputGroupSelect01" onChange={(event) => handleCurrencyChange(event.target.value)}>
                <option hidden value="">Currency (£ Pound)</option>
                <option value="£" name="pound"> £ Pound</option>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="€" name="euro"> € Euro</option>
                <option value="₹" name="ruppee"> ₹ Ruppee</option>
                </select>
                </div>
                </div>

        </div>
    );
};

export default CurrencyField;


