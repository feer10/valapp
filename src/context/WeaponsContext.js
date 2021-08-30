import React, { useState } from 'react'

const Context = React.createContext({})

export function WeaponsContextProvider ({children}) {
    const [weapons, setWeapons] = useState([])
    
    return <Context.Provider value={{weapons, setWeapons}}>
        {children}
    </Context.Provider>
}

export default Context