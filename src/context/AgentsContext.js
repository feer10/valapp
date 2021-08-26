import React, { useState } from 'react'

const Context = React.createContext({})

export function AgentsContextProvider ({children}) {
    const [agents, setAgents] = useState([])
    
    return <Context.Provider value={{agents, setAgents}}>
        {children}
    </Context.Provider>
}

export default Context