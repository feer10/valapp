import React from 'react'
import { Link } from 'react-router-dom'

export default function WeaponsIcons ({displayIcon, displayName, weaponId, category}) {
    return (     
        <div className="p-sm max-w-1/3 flex flex-col
        items-center justify-center agent_icon_wrapper
        hover:bg-gray-100 hover:text-black hover:rounded-xl" data-category={category}>
            <Link to={`/weapons/${weaponId}`}>
                <img loading="lazy" src={displayIcon} alt={displayName} className=""/>
                <h2 className="text-lg p-sm">{displayName}</h2>
            </Link>
        </div>
    )
}