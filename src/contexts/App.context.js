import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

export function useApp(){
    return useContext(AppContext);
}

export default function AppProvider({ children }) {
    const [visibleLink, setVisibleLink] = useState(false);
    const [categoryState, setCategoryState] = useState(null);

    const value = {
        visibleLink,
        setVisibleLink,
        categoryState,
        setCategoryState
    }
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
