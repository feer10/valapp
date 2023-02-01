import React from 'react'
import MapsIcons from './components/MapsIcons';
import { useGetDataByNameQuery } from '../../services/valorantApi'

export default function ListOfMaps () {
  const { data, error, isLoading } = useGetDataByNameQuery('maps')

  return (
    <div className="flex flex-wrap p-4 justify-center">
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.data.map(({ uuid, splash, displayName }) =>
            <MapsIcons 
              key={uuid}
              mapId={uuid}
              splash={splash}
              displayName={displayName}
            />
          )
        ) : null
      }
    </div>
  )
}
