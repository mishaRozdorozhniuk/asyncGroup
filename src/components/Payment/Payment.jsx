import React from 'react';
import './Payment.css'

const Payment = () => {
    return (
        <div className="boost">
            <div className="boost-item">
                <span className="boost-el">Combine Boost</span>
                <span className="boost-price yellow">154.00 EUR</span>
            </div>
            <div className="boost-item">
                <span className="boost-el">Max Quote</span>
                <span className="boost-price">5.70</span>
            </div>
            <div className="boost-item">
                <span className="boost-el">Limits</span>
                <span className="boost-price">1-5.000</span>
            </div>
            <div className="boost-item">
                <span className="boost-el">To Win</span>
                <span className="boost-price green">2.850,00</span>
            </div>
            <div className="boost-money">
                <span className="bg-dark">-</span>
                <div className="bg-dark">
                    <span>Stake</span>
                    <span className="boost-money-eur">500 EUR</span>
                </div>
                <span className="bg-dark">+</span>
            </div>
            <div className="boost-coefficient">
                <span className="bg-dark">500</span>
                <span className="bg-dark">1.000</span>
                <span className="bg-dark">5.000</span>
                <span className="bg-dark">10.000</span>
            </div>
            <button className="boost-pay-btn">PLACE 500 EUR</button>
        </div>
    );
};

export default Payment;