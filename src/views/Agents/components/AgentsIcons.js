import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../components/Spinner/Spinner'

export default function AgentsIcon ({displayIconSmall, displayName, agentId}) {
  const [loaded, setLoaded] = useState(false)

	return (
		<div className="p-sm flex flex-auto max-w-[126px] flex-col
			items-center justify-center agent_icon_wrapper
		hover:bg-gray-100 hover:text-black hover:rounded-xl">
			<Link to={`/agents/${agentId}`} style={loaded ? {} : { display: 'none' }}>
				<img onLoad={() => setLoaded(true)} src={displayIconSmall} alt={displayName} className="rounded-full bg-gray-100"/>
				<h2 className="text-lg p-sm">{displayName}</h2>
			</Link>
			{ loaded ? null : (
				<Spinner />
			)}
		</div>
	)
}