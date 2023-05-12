import React from 'react'
import { useParams } from 'react-router'
import { useGetMapByNameQuery } from '../../services/valorantApi'

export default function mapsDetails () {
	const { mapId } = useParams()
	const { data, error, isLoading } = useGetMapByNameQuery(mapId)
	const map = data && data.data;

	return (
		error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<div className="flex p-md flex-col relative text-white h-full justify-center self-start">
					<div>
						<div className="absolute left-5 top-0 text-xl p-sm underline">{map.displayName} Details</div>
					</div>
					<h1 className="text-3xl p-sm pt-12 mb-2 text-red-200">{map.displayName}</h1>
					<div>
						<img src={map.splash} alt={map.displayName} className="h-40 w-full object-contain"/>
					</div>
					<div>
						<h2 className="text-3xl p-sm pt-12 mb-2 text-red-200">Callouts</h2>
						<div>
							<img src={map.displayIcon} alt={map.displayName} className="h-full object-contain"/>
						</div>
					</div>
				</div>
			) : null
	)
}