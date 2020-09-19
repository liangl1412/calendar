import React from 'react';
import Day from './Day';
import './Week.css';

const Week = ({date, currentMonth}) => {
    const renderDays = () => {
        let days = [];
        let day = date;
        for (let i = 0; i < 7; i++) {
            const number = day.format("D"); // 1, 2 ....
            const isCurrentMonth = currentMonth === date.month();
            const isToday = date.isSame(new Date(), "day")
            days.push(
                <Day date={date.clone()} number={number} isCurrentMonth={isCurrentMonth} isToday={isToday} key={date.month() + number} />
            )
            day.add(1, 'd');
        }
        return days;
    }
    return (
        <div className="week-row">
            {renderDays()}
        </div>
    )
}

export default React.memo(Week);