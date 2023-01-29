import React from 'react'
import { Link } from 'react-router-dom'

export default function AgentsIcon ({displayIconSmall, displayName, agentId}) {
    return (     
        <div className="p-sm max-w-1/3 flex flex-col
        items-center justify-center agent_icon_wrapper
        hover:bg-gray-100 hover:text-black hover:rounded-xl">
            <Link to={`/agents/${agentId}`}>
                <img loading="lazy" src={displayIconSmall} alt={displayName} className="rounded-full bg-gray-100"/>
                <h2 className="text-lg p-sm">{displayName}</h2>
            </Link>
        </div>
    )
}