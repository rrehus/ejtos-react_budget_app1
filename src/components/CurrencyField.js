import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyField = (props) => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency);

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue>Currency</option>
                        <option value="Pound" name="pound"> £</option>
                <option value="Dollar" name="dollar"> $</option>
                  </select>
                </div>
                </div>

        </div>
    );
};

export default CurrencyField;
