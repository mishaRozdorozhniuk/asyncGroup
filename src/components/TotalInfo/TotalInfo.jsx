import React from 'react';
import './TotalInfo.css'

const TotalInfo = () => {
    return (
        <div className="total__info">
            <select className="total__select" name="choose-sport" id="choose-sport">
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
            </select>
            <div className="total__results">
                <span>Match result</span>
                <span>Total Goals</span>
                <span>Goals Handicap 3 Way</span>
            </div>
        </div>
    );
};

export default TotalInfo;