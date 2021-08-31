import React, { useState } from 'react'

const Context = React.createContext({})

export function MapsContextProvider ({children}) {
    const [maps, setMaps] = useState([])
    
    return <Context.Provider value={{maps, setMaps}}>
        {children}
    </Context.Provider>
}

export default Context