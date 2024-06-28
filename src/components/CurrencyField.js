import React, { useContext} from 'react';
import Select, { StylesConfig } from 'react-select';
import InputLabel from 'react-select';
import { AppContext } from '../context/AppContext';
import './CurrencyField.css'

const options = [
    { value: 'Pound', label: 'Pound' },
    { value: 'Euro', label: 'Euro' },
    { value: 'Ruppee', label: 'Ruppee' }
  ]
  
const CurrencyField = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    const customStyles = {
        control: (styles) => ({ ...styles, backgroundColor: '#a6e3a1' }),
        option: (base, {isFocused}) => {
            return {
                ...base,
                backgroundColor: isFocused ? "white" : "#a6e3a1",
              };
        }
        };

    return (

    <Select placeholder="Currency (Pound)" styles={customStyles} options={options}  onChange={(e) => handleCurrencyChange(e.value)}/>    
    );
};

export default CurrencyField;


