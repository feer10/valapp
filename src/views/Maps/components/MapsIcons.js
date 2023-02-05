import React from 'react'

export default function MapsIcons ({splash, displayName}) {
  return (     
    <div className="p-sm w-full flex flex-col
    items-center justify-center relative min-h-[100px]">
      <img loading={"lazy"} src={splash} alt={displayName} className=""/>
      <h2 className="text-3xl p-sm absolute z-10 bottom-1.5 left-4">{displayName}</h2>
    </div>
  )
}