import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../components/Spinner/Spinner'

export default function MapsIcons ({splash, displayName, mapId}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Link to={`/maps/${mapId}`}>
        <div className="p-sm w-full flex flex-col
          items-center justify-center relative min-h-[100px]" style={loaded ? {} : { display: 'none' }}>
          <img onLoad={() => setLoaded(true)}
            src={splash}
            alt={displayName}
            style={loaded ? {} : { display: 'none' }}
            className=""/>
          <h2 className="text-3xl p-sm absolute z-10 bottom-1.5 left-4">{displayName}</h2>
        </div>
			</Link>
      { loaded ? null : (
        <div className="p-sm w-full flex flex-col
          items-center justify-center relative min-h-[100px]">
          <Spinner />
        </div>
      )}
    </>
  )
}