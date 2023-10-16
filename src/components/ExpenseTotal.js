import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './ExpenseTotal.css';

const ExpenseTotal = () => {
    const { currency, dispatch } = useContext(AppContext);

    const currencyOptions = [
        { value: 'dollar', label: '$ Dollar' },
        { value: 'pound', label: '£ Pound' },
        { value: 'euro', label: '€ Euro' },
        { value: 'ruppee', label: '₹ Rupee' },
    ];

    const handleCurrencyChange = (selectedCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        currencyOptions.find((option) => option.value === currency)
    );

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        handleCurrencyChange(option.value);
        setIsDropdownOpen(false);
    };

    return (
        <div className='yellow-dropdown' onClick={toggleDropdown}>
            Currency: {selectedOption.label}
            {isDropdownOpen && (
                <div className='dropdown-options'>
                    {currencyOptions.map((option) => (
                        <div key={option.value} onClick={() => selectOption(option)}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExpenseTotal;
