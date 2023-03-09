import React from 'react';

const HeaderMenu = () => {
    return (
        <nav className="header__nav">
            <ul className="header__menu">
                <li className="header__item"><a href="#">Homepage</a></li>
                <li className="header__item"><a href="#">Live Bets</a></li>
                <li className="header__item"><a href="#">Sports</a></li>
                <li className="header__item"><a href="#">Highlights</a></li>
                <li className="header__item"><a href="#">Top matches</a></li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;