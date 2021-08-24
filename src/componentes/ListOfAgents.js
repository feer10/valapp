import React, {useEffect, useState} from 'react'
import AgentsIcon from './AgentsIcons'
import getAgents from '../services/getAgents';

export default function ListOfAgents () {
    const [agents, setAgents] = useState([]) 

    useEffect(function () {
        getAgents().then(agents => setAgents(agents))
    }, [])

    return agents.map(({ uuid, displayIconSmall, displayName }) =>
        <AgentsIcon 
        key={uuid}
        displayIconSmall={displayIconSmall}
        displayName={displayName}
        />
    )
}
