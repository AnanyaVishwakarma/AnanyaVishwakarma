import React from 'react';
import './FactItem.css';

const FactItem = ({ icon, label, value }) => {
  return (
    <div className="fact-item">
      <div className="fact-item__icon">
        {icon}
      </div>
      <div className="fact-item__content">
        <span className="fact-item__label">{label}</span>
        <span className="fact-item__value">{value}</span>
      </div>
    </div>
  );
};

export default FactItem;