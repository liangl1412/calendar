import React, {useState} from 'react';
import moment from 'moment';
import SVGIcon from './component/SVGIcon';
import SVG from './constant/svg';
import Week from './component/Week';
import './App.css';

const weekLabel = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const App = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const renderWeeks = () => {
    let weeks = [];
    const currentMonth = currentDate.month();
    let start = currentDate.clone().startOf("month").subtract(1, "d").day("Monday");
    for (let i = 0; i < 6; i++) {
      weeks.push(
        <Week date={start.clone()} key={start} currentMonth={currentMonth}/>
      )
      start.add(1, 'w');
    }
    return weeks;
  }

  
  return (
    <div className="calendar">
      <header className="calendar-header">
        <div className="icon-wrapper" onClick={() => setCurrentDate(currentDate.clone().subtract(1, 'month'))}><SVGIcon icon={SVG.CHEVRON_LEFT} size={20}/></div>
        <h1>{currentDate.format("MMMM YYYY")}</h1>
        <div className="icon-wrapper" onClick={() => setCurrentDate(currentDate.clone().add(1, 'month'))}><SVGIcon icon={SVG.CHEVRON_RIGHT} size={20}/></div>
      </header>

      <div className="calendar-body">
        <div className="week-label-row">
          {weekLabel.map(label => <div className="week-label" key={label}>{label}</div>)}
        </div>
        {renderWeeks()}
      </div>
    </div>
  );
}

export default App;
