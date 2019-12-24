import React, {createContext, useContext, useReducer} from "react";

/**
 * @type {React.Context<unknown>}
 */
export const StateContext = createContext();

/**
 * @param reducer
 * @param initialState
 * @param children
 * @returns {*}
 * @constructor
 */
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useGlobals = () => useContext(StateContext);
