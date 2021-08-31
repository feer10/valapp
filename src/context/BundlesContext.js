import React, { useState } from 'react'

const Context = React.createContext({})

export function BundlesContextProvider ({children}) {
    const [bundles, setBundles] = useState([])
    
    return <Context.Provider value={{bundles, setBundles}}>
        {children}
    </Context.Provider>
}

export default Context