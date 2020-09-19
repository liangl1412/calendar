import React, { useState, useRef, useContext } from 'react';
import SVGIcon from './SVGIcon';
import SVG from '../constant/svg';
import './Day.css';
import { store, ACTION_TYPE } from '../store.js';


const Day = ({date, number, isCurrentMonth, isToday}) => {
    const formateDate = date.format("dddd, MMMM D");
    const id = date.unix();
    const globalState = useContext(store);
    const { dispatch, eventState } = globalState;
    const [events, setEvents] = useState(eventState[id] || []);
    const [selected, setSelected] = useState(false);
    const inputRef = useRef();
    
    const addEvent = (e) => {
        e.stopPropagation();
        const text = inputRef.current.value.trim();
        if (!text) {
            alert('You can not add empty event');
        }
        dispatch({
            type: ACTION_TYPE.EVENT_CREATE,
            payload: {
                id,
                event: text
            }
        })
        setEvents(eventState[id])
        setSelected(false);
    }
    const deleteEvent = (e, index) => {
        e.stopPropagation();
        dispatch({
            type: ACTION_TYPE.EVENT_DELETE,
            payload: {
                id,
                index
            }
        })
        setEvents(eventState[id])
    }
    const updateEvent = (e, index) => {
        e.stopPropagation();
        alert('upcoming feature for update');
    }

    const closeModal = (e) => {
        e.stopPropagation();
        setSelected(false)
    }

    let className = "day-box";
    className+= !isCurrentMonth ? ' other-month': ''
    className+= isToday ? ' today': ''
    return (
        <div className={className} onClick={() => setSelected(true)}>
            <p className="day-number">{number}</p>
            {selected && 
                <div className="event-modal-wrapper">
                    <div className="event-modal">
                        <h3>{formateDate}</h3>
                        <span className="close-event" onClick={closeModal}><SVGIcon icon={SVG.CLOSE} size={14}/></span>
                        <input type="text" className="event-input" placeholder="Add event details" ref={inputRef} />
                        <button onClick={addEvent}>Add</button>
                    </div>
                </div>
            }
            {events.length > 0 && events.map((event, i) => 
                <div className="event-box" key={event + i} onClick={(e) => updateEvent(e, i)}>
                    {event}
                    <span className="delete-event" onClick={(e) => deleteEvent(e, i)}><SVGIcon icon={SVG.CLOSE} size={12}/></span>
                </div>
            )}

        </div>
        
    )
}

export default Day;
