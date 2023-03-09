import React from 'react';
import Logo from '../../images/logo.svg'
import SearchIcon from '../../images/search-icon.svg'
import ArrowIcon from '../../images/arrow.svg'
import NoteIcon from '../../images/note-icon.svg'
import FlagIcon from '../../images/Flags.svg'
import SignOut from '../../images/sign-out-icon.svg'
import Button from "../Button/Button";
import HeaderMenu from "./HeaderMenu";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
                <img className="logo" src={Logo} alt="logo"/>
                <HeaderMenu />
                <div className="header__menu">
                    <div className="icon-wrapper">
                        <img src={SearchIcon} alt="search-icon"/>
                    </div>
                    <div className="icon-wrapper">
                        <img src={NoteIcon} alt="arrow-icon"/>
                    </div>
                    <div className="icon-wrapper">
                        <img src={ArrowIcon} alt="arrow-icon"/>
                    </div>
                    <div className="header__username">
                        <span className="balance">800,000.00CFD</span>
                        <span className="username">testuser12</span>
                    </div>
                    <Button className="withdrawal">WITHDRAWAL</Button>
                    <div className="icon-wrapper">
                        <img src={FlagIcon} alt="arrow-icon"/>
                    </div>
                    <Button className="icon-wrapper sign-out">
                        <img src={SignOut} alt="arrow-icon"/>
                    </Button>
                </div>
        </header>
    );
};

export default Header;
