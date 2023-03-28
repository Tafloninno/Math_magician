import React from 'react';
import Calculator from '../components/Calculator';
import Qoute from '../components/qoute';
import './style.css';

const CalculatorPage = () => (
  <div className="page_container">
    <div className="qoute_wrapper">
      <Qoute />
    </div>
    <div className="digit_wrapper">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
