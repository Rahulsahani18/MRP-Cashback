import React, { useState } from 'react';
import './CashbackScreen.css'; // Enhanced CSS styling and animations

const CashbackScreen = () => {
  const [customerName, setCustomerName] = useState('');
  const [orderValue, setOrderValue] = useState('');
  const [cashback, setCashback] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerName && orderValue) {
      const calculatedCashback = (orderValue * 0.1).toFixed(2);
      setCashback(calculatedCashback);
      setSubmitted(true);

      // Reset after animation and submission
      setTimeout(() => {
        setSubmitted(false);
        setCustomerName('');
        setOrderValue('');
      }, 5000); // Adjust animation timing
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center cashback-wrapper">
      <div className={`card cashback-card ${submitted ? 'animate' : ''}`}>
        <div className="card-body">
          <h2 className="text-center mb-4">Cashback Reward Calculator</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="cashback-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control custom-input"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter customer name"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  className="form-control custom-input"
                  value={orderValue}
                  onChange={(e) => setOrderValue(e.target.value)}
                  placeholder="Enter order value"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4">
                Calculate Cashback
              </button>
            </form>
          ) : (
            <div className="cashback-result text-center">
              <div className="checkmark-circle">
                <div className="checkmark"></div>
              </div>
              <h3 className="mt-4">Transaction Complete!</h3>
              <p>
                <strong>{customerName}</strong>, your cashback is{' '}
                <span className="cashback-amount">₹{cashback}</span>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CashbackScreen;
