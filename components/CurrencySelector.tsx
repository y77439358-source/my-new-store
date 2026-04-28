import React, { useState } from 'react';

const CurrencySelector = () => {
    const [currency, setCurrency] = useState('USD');

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
        // Here you can also add logic to update the prices displayed in the store based on the selected currency
    };

    return (
        <div className="currency-selector">
            <label htmlFor="currency" className="mr-2">Select Currency:</label>
            <select id="currency" value={currency} onChange={handleCurrencyChange} className="border rounded p-1">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                {/* Add more currencies as needed */}
            </select>
        </div>
    );
};

export default CurrencySelector;