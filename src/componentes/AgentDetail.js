import React from 'react'
import { useParams } from 'react-router'
import useGlobalAgents from '../hooks/useGlobalAgents'

export default function AgentDetail () {
    const agents = useGlobalAgents()
    const { agentId } = useParams()

    const agent = agents.find(agent => agent.uuid === agentId )

    if (!agent) return null

    return (
        <div className="flex p-md flex-col relative text-white items-center justify-center">
            <div>
                <div className="absolute left-5 top-0 text-xl p-sm underline">Agent Details</div>
            </div>
            <h1 className="text-3xl p-sm pt-12">{agent.displayName}</h1>
            <div>
                <img src={agent.bustPortrait} alt={agent.displayName} className="max-h-80"/>
            </div>
            <div className="pt-8">
                {agent.description}
            </div>
        </div>
    )
}