import React, { useReducer, useEffect } from 'react';

const ContextDefault = (reducer, actions, defaultValue) => {    
    const Context = React.createContext(defaultValue);

    
    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, defaultValue);

        useEffect(() => {
            localStorage.setItem('insuranceDemo', JSON.stringify(state))
          }, [state])
        
        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    };

    return { Context, Provider};
};

export default ContextDefault;