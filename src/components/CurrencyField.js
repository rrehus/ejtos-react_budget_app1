import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

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
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => handleCurrencyChange(event.target.value)}>
                <option defaultValue>Currency</option>
                <option value="Pound" name="pound"> £</option>
                <option value="Dollar" name="dollar"> $</option>
                <option value="Euro" name="euro"> €</option>
                <option value="Ruppee" name="ruppee"> ₹</option>
                </select>
                </div>
                </div>

        </div>
    );
};

export default CurrencyField;


