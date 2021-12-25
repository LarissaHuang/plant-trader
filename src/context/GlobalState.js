import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
// Initial state
const initialState = {
    plants: [
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    // actions make call to reducer
    function deletePlant(id) {
        dispatch({
            type: 'DELETE_PLANT',
            payload: id
        });
    }

    function addPlant(plant) {
        dispatch({
            type: 'ADD_PLANT',
            payload: plant
        });
    }


    return (<GlobalContext.Provider value={{
        plants: state.plants,
        deletePlant,
        addPlant
    }}>
        {children}
    </GlobalContext.Provider>);
}