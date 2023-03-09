import React from 'react';
import Sports from "../Sports/Sports";
import './WeekNavigation.css'

const WeekNavigation = () => {
    return (
        <div className="week__nav">
            <ul>
                <li>Today</li>
                <li>Tomorrow</li>
                <li>Sunday</li>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
            </ul>
            <Sports />
        </div>
    );
};

export default WeekNavigation;