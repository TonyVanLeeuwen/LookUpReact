import React, {createContext, useState} from 'react';
export const TempContext = createContext();

function TempContextProvider({children}) {
    function setTokenAfterLoggingIn(token, name){
        localStorage.setItem("jwt", token)
        localStorage.setItem("name", name)
        return `${localStorage.getItem("jwt")}`
    }

    const value = {setTokenAfterLoggingIn}
        return (
            <TempContext.Provider value={value}>
                {children}
            </TempContext.Provider>
        )
}

export default TempContextProvider;