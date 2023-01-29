import React from 'react'
import { useParams } from 'react-router'
import { useGetAgentByNameQuery } from '../services/valorantApi'

export default function AgentDetail () {
	const { agentId } = useParams()
	const { data, error, isLoading } = useGetAgentByNameQuery(agentId)

	return (
		error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<div className="flex p-md flex-col relative text-white items-center justify-center">
					<div>
						<div className="absolute left-5 top-0 text-xl p-sm underline">Agent Details</div>
					</div>
					<h1 className="text-3xl p-sm pt-12">{data.data.displayName}</h1>
					<div>
						<img src={data.data.bustPortrait} alt={data.data.displayName} className="max-h-80"/>
					</div>
					<div className="pt-8">
						{data.data.description}
					</div>
				</div>
			) : null
	)
}