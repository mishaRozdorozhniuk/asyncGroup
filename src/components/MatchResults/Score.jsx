import React from 'react';
import Locked from '../../images/locked.svg'

const Score = ({result, color, bg, text, locked, green, red}) => {
    return (
        <>
            {locked ?
                <div className="result" style={{
                    background: 'linear-gradient(180deg, #F1F1F1 0%, #9E9E9E 100%)'
                }}>
                    <img className="locked-icon" src={Locked} alt="locked-img" />
                </div> : <div className="result" style={{
                        borderBottom: `4px solid ${red}`, borderTop: `4px solid ${green}`,
                        background: bg
                    }}>

                    <span style={{color: text}}>{result}</span>
                </div>
            }
        </>
    );
};

export default Score;