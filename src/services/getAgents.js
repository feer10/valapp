export default function getAgents ({agent_uuid = ''} = {}) {
    const url_agents = `https://valorant-api.com/v1/agents/${agent_uuid}`
    
    return fetch(url_agents)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            if (Array.isArray(data)) {
                const agents = data.map(agent => {
                    const { displayIconSmall, displayName, uuid } = agent

                    return { displayIconSmall, displayName, uuid }
                })
                return agents
            }
        })
}