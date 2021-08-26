import { useContext, useEffect } from "react";
import AgentsContext from "../context/AgentsContext";
import getAgents from "../services/getAgents";

export function useAgents ({ agent }) {
    const {agents, setAgents} = useContext(AgentsContext) 
    
    useEffect(function () {
        getAgents({ agent })
            .then(agents => {
                setAgents(agents)
                localStorage.setItem('lastAgent', agent)
            })
    }, [agent, setAgents])
    return {agents}
}