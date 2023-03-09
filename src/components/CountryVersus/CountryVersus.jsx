import React from 'react';
import Ball from '../../images/ball.svg'
import './CountryVersus.css'

const CountryVersus = ({text}) => {
    return (
        <div className="country__versus">
            <img className="ball-icon" src={Ball} alt=""/>
            <span>{text}</span>
        </div>
    );
};

export default CountryVersus;