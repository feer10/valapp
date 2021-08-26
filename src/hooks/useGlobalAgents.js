import { useContext } from 'react'
import AgentsContext from '../context/AgentsContext'

export default function useGlobalAgents () {
    const {agents} = useContext(AgentsContext)
    return agents

}