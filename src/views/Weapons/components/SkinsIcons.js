import React from 'react'

export default function SkinsIcons ({displayIcon, displayName}) {
	return (     
		<div className="p-sm flex flex-col items-center border-b border-white mb-3
    justify-center agent_icon_wrapper hover:bg-gray-100 hover:text-black hover:rounded-xl">
      <img loading="lazy" src={displayIcon} alt={displayName} className=""/>
      <h2 className="text-lg p-sm">{displayName}</h2>
		</div>
	)
}