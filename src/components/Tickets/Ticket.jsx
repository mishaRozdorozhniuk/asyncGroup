import React from 'react';
import CrossIcon from '../../images/close_black_24dp 2.svg'
import './Ticket.css'

const Ticket = ({red}) => {
    return (
        <article className="ticket">
            <div className="ticket__inner">
                <span className="ticket__team">FC Aarau - Yveerdon</span>
                <span className="ticket__goals">Total Goals: <span className="goals-green">Under (2.5)</span></span>
            </div>
            <div className="cross-wrapper">
                <img className="cross"  src={CrossIcon} alt="cross-icon"/>
                <span className="coefficient" style={{background: red ? 'red' : '#22B14C'}}>8.00</span>
            </div>
        </article>
    );
};

export default Ticket;