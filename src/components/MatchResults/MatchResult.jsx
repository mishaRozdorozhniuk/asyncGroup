import React from 'react';
import CountryVersus from "../CountryVersus/CountryVersus";
import BurgerIcon from '../../images/burder-icon.svg'
import Score from "./Score";

const MatchResult = ({time, firstTeam, secondTeam, locked, bgGrey, bgGreen, transparent, green, red, unvailable}) => {
    const bgTransparent = 'transparent'

    return (
        <div className="match__result">
            <div className="match__result-inner">
                <div className="match__data-wrapper">
                    <data className="match__date">05 November</data>
                    <time className="match__time">{time}</time>
                </div>
                <div>
                    <p className="match__team">{firstTeam} <p>{secondTeam}</p></p>
                    <CountryVersus text="England / Championship" />
                </div>
            </div>
            <div className="score-wrapper">
                <div className="score">
                    <Score result="4.49" bg={bgGrey} locked={locked} green={green} />
                    <Score result="4.49" color={transparent} bg={bgGrey} locked={locked} red={red} />
                    <Score result="4.49" bg={bgGrey} locked={locked} green={green} />
                </div>
                <div className="score">
                    {
                        unvailable ? <span className="unvaliable">UNAVALIABLE</span> :
                        <>
                            <Score result="4.49" bg={bgGreen} text="#fff" locked={locked}  />
                            <Score result="4.49" bg={bgTransparent} text="#fff" />
                            <Score result="4.49" bg={bgGrey} locked={locked} green={green} />
                        </>
                    }
                </div>
                <div className="score">
                    {
                        unvailable ? <span className="unvaliable">UNAVALIABLE</span> :
                            <>
                                <Score result="4.49" none bg={bgTransparent} text="#fff" />
                                <Score result="4.49" bg={bgGrey} locked={locked} />
                                <Score result="4.49" bg={bgGrey} locked={locked} />
                                <Score result="4.49" bg={bgGrey} locked={locked} />
                            </>
                    }
                </div>
                <div className="match__select">
                    <img className="burger-icon" src={BurgerIcon} alt=""/>
                    <span>+203</span>
                </div>
            </div>
        </div>
    );
};

export default MatchResult;