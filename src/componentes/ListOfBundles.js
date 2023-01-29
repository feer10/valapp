import React from 'react'
import BundlesIcons from './BundlesIcons';
import { useGetDataByNameQuery } from '../services/valorantApi'

export default function ListOfBundles () {
  const { data, error, isLoading } = useGetDataByNameQuery('bundles')

  return (
    <div className="flex flex-wrap p-4 justify-center">
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.data.map(({ uuid, displayIcon, displayName }) =>
            <BundlesIcons 
              key={uuid}
              bundleId={uuid}
              displayIcon={displayIcon}
              displayName={displayName}
            />
          )
        ) : null
      }
    </div>
  )
}
