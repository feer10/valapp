import React from 'react'

export default function AgentsIcon ({displayIconSmall, displayName}) {
    return (
        <div className="p-sm max-w-1/3 flex flex-col
         items-center justify-center agent_icon_wrapper
         hover:bg-gray-100 hover:text-black hover:rounded-xl">
            <img src={displayIconSmall} alt={displayName} className="rounded-full bg-gray-100"/>
            <h2 className="text-lg p-sm">{displayName}</h2>
        </div>
    )
}