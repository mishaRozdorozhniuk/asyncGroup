import React from 'react';
import Football from '../../images/football2 2.svg'
import Basketball from '../../images/baseball.svg'
import Baseball from '../../images/baseball.svg'
import Tennis from '../../images/tennis.svg'
import Cricket from '../../images/cricket.svg'
import AmericanFootball from '../../images/american-football.svg'
import Hokey from '../../images/ice-hockey.svg'
import FieldHokey from '../../images/field-hockey.svg'
import Lacrosse from '../../images/lacrosse.svg'
import Wrestling from '../../images/wrestlin.svg'
import MMA from '../../images/mma.svg'
import Snooker from '../../images/snooker.svg'
import './Sports.css'

const Sports = () => {
    return (
        <div className="sport">
            <div className="sport__wrapper"><img src={Football} alt=""/></div>
            <div className="sport__wrapper"><img src={Baseball} alt=""/></div>
            <div className="sport__wrapper"><img src={Basketball} alt=""/></div>
            <div className="sport__wrapper"><img src={Tennis} alt=""/></div>
            <div className="sport__wrapper"><img src={Cricket} alt=""/></div>
            <div className="sport__wrapper"><img src={Hokey} alt=""/></div>
            <div className="sport__wrapper"><img src={AmericanFootball} alt=""/></div>
            <div className="sport__wrapper"><img src={FieldHokey} alt=""/></div>
            <div className="sport__wrapper"><img src={Lacrosse} alt=""/></div>
            <div className="sport__wrapper"><img src={Wrestling} alt=""/></div>
            <div className="sport__wrapper"><img src={MMA} alt=""/></div>
            <div className="sport__wrapper"><img src={Snooker} alt=""/></div>
        </div>
    );
};

export default Sports;