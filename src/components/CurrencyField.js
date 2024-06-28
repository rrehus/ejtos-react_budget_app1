import React, { useContext} from 'react';
import Select, { StylesConfig } from 'react-select';
import { AppContext } from '../context/AppContext';
import './CurrencyField.css'

const options = [
    { value: '$', label: '$ Dollar' },
    { value: '£', label: '£ Pound' },
    { value: '€', label: '€ Euro' },
    { value: '₹', label: '₹ Ruppee' }
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
        control: (styles) => ({ ...styles, backgroundColor: '#a6e3a1',height:"58px",border:"none" }),
        placeholder: (defaultStyles) => ({...defaultStyles,color: 'white'}),
        option: (base, {isFocused}) => {
            return {
                ...base,
                backgroundColor: isFocused ? "white" : "#a6e3a1",
              };
        }
        };

    return (

    <Select class="selectClass" placeholder="Currency (£ Pound)" styles={customStyles} options={options}  onChange={(e) => handleCurrencyChange(e.value)}/>    
    );
};

export default CurrencyField;


