import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'; // Ensure you import the CSS file
import {FaCaretDown} from 'react-icons/fa';

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState('$ Dollar');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeCurrency = (val, label) => {
    setSelectedCurrency(label);

    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });

    setIsDropdownOpen(false);
  };

 

  return (
    <div>
      <div className="custom-dropdown">
        <button
          className="custom-dropdown-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}          
        >
          Currency ({selectedCurrency})<FaCaretDown color="white"></FaCaretDown>
        </button>
        {isDropdownOpen && (
          <ul className="custom-dropdown-menu">
            <li onClick={() => changeCurrency('$', '$ Dollar')}>$ Dollar</li>
            <li onClick={() => changeCurrency('£', '£ Pound')}>£ Pound</li>
            <li onClick={() => changeCurrency('€', '€ Euro')}>€ Euro</li>
            <li onClick={() => changeCurrency('₹', '₹ Rupee')}>₹ Rupee</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Currency;
