import React from 'react'
import AgentsIcon from './components/AgentsIcons'
import { useGetDataByNameQuery } from '../../services/valorantApi'

export default function ListOfAgents () {
const { data, error, isLoading } = useGetDataByNameQuery('agents')
const agents = data && data.data;

  return (
    <div className="flex flex-wrap p-4 justify-center">
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          agents.map(({ uuid, displayIconSmall, displayName }) => {
              if (uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9') {
                return <AgentsIcon 
                  key={uuid}
                  agentId={uuid}
                  displayIconSmall={displayIconSmall}
                  displayName={displayName}
                />
              }
            }
          )
        ) : null
      }
    </div>
  )
}
