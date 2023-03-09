import React from 'react';
import RubbishIcon from '../../images/Rubish-icon.svg'
import Ticket from "../Tickets/Ticket";
import Payment from "../Payment/Payment";
import './Aside.css'

const Aside = () => {
    return (
        <aside>
            <div className="aside__header">
                <h2 className="aside__title">Ticket <span>3</span></h2>
                <img src={RubbishIcon} alt="rubbish-icon"/>
            </div>
            <select name="system" className="aside__select">
                <option value="System">System</option>
            </select>
            <Ticket />
            <Ticket red={true} />
            <Ticket red={true} />
            <Payment />
        </aside>
    );
};

export default Aside;