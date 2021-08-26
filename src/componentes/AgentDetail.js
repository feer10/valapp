import React from 'react'
import { useParams } from 'react-router'
import useGlobalAgents from '../hooks/useGlobalAgents'

export default function AgentDetail () {
    const agents = useGlobalAgents()
    const { agentId } = useParams()

    const agent = agents.find(agent => agent.uuid === agentId )

    if (!agent) return null

    return (
        <div>
            <div>
                <div className="text-xl p-sm">Agent Details</div>
            </div>
            <h1 className="text-3xl p-sm">{agent.displayName}</h1>
            <div>
                <img src={agent.displayIconSmall} alt={agent.displayName} className="rounded-full bg-gray-100"/>
            </div>
        </div>
    )
}