import React from 'react'
import AgentsIcon from './AgentsIcons'
import { useGetDataByNameQuery } from '../services/valorantApi'

export default function ListOfAgents () {
const { data, error, isLoading } = useGetDataByNameQuery('agents')

  return (
    <div className="flex flex-wrap p-4 justify-center">
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.data.map(({ uuid, displayIconSmall, displayName }) =>
            <AgentsIcon 
              key={uuid}
              agentId={uuid}
              displayIconSmall={displayIconSmall}
              displayName={displayName}
            />
          )
        ) : null
      }
    </div>
  )
}
