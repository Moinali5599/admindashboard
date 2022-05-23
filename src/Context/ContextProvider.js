import React , {createContext, useContext, useState} from 'react'

const StateContext = createContext();

const intialState = {
    chat: false,
    notification: false,
    userProfile: false,
    cart: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(intialState);
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (clicked) => {
        setIsClicked({...intialState, [clicked]:true})
    }
    return (
        <StateContext.Provider
        value={
            {activeMenu, setActiveMenu, isClicked, setIsClicked, 
            handleClick,screenSize,setScreenSize}
        }
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

