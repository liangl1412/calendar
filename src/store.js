import React, {createContext, useReducer} from 'react';

export const ACTION_TYPE = {
    EVENT_CREATE: 'EVENT_CREATE',
    EVENT_DELETE: 'EVENT_DELETE',
    EVENT_UPDATE: 'EVENT_UPDATE'
}
const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [eventState, dispatch] = useReducer((state, action) => {
    const {type, payload} = action;
    const {id, event, index} = payload;
    switch(type) {
        case ACTION_TYPE.EVENT_CREATE:
            if (state[id]) {
                const updatedEvent = [...state[id], event];
                return Object.assign(state, {[id]: updatedEvent})
            }
            return Object.assign(state, {[id]: [event]})
        case ACTION_TYPE.EVENT_DELETE:
            const updatedEvent = [...state[id]];
            updatedEvent.splice(index, 1);
            return Object.assign(state, {[id]: updatedEvent})
        default:
            return state
    };
  }, initialState);

  return <Provider value={{ eventState, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }