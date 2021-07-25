import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
let initialState = {
    amount: 0,
    tip: 0,
    partySize: 1
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    
    function newAmount(amount) {
        dispatch({
            type: 'SET_AMOUNT',
            payload: amount
        });
    }

    function newTip(tip) {
        dispatch({
            type: 'SET_TIP',
            payload: tip
        });
    }

    function newPartySize(partySize) {
        dispatch({
            type: 'SET_PARTY_SIZE',
            payload: partySize
        });
    }
    
    return (
        <GlobalContext.Provider value={{
            amount: state.amount,
            tip: state.tip,
            partySize: state.partySize,
            newAmount,
            newTip,
            newPartySize
        }}>
            { children }
        </GlobalContext.Provider>
    );
}