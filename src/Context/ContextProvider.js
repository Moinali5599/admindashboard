import React , {createContext, useContext, useState} from 'react'

const StateContext = createContext();

const intialState = {
    chat: false,
    notification: false,
    userProfile: false,
    cart: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setactiveMenu] = useState(true)
    return (
        <StateContext.Provider
        value={
            {activeMenu, setactiveMenu}
        }
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

