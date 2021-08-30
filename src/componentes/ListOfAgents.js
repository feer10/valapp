import React from 'react'
import AgentsIcon from './AgentsIcons'
import { useAgents } from '../hooks/useAgents';

export default function ListOfAgents (params) {
    const { agent } = params
    const {agents} = useAgents({agent})

    return (
    <div className="flex flex-wrap p-4 justify-center">
        {
            agents.map(({ uuid, displayIconSmall, displayName }) =>
                <AgentsIcon 
                    key={uuid}
                    agentId={uuid}
                    displayIconSmall={displayIconSmall}
                    displayName={displayName}
                />
            )
        }
    </div>
    )
}
