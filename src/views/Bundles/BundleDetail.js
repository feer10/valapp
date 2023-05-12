import React from 'react'
import { useParams } from 'react-router'
import { useGetBundleByNameQuery } from '../../services/valorantApi'

export default function BundleDetails () {
	const { bundleId } = useParams()
	const { data, error, isLoading } = useGetBundleByNameQuery(bundleId)
	const bundle = data && data.data;

	return (
		error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<div className="flex p-md flex-col relative text-white h-full justify-center self-start">
					<div>
						<div className="absolute left-5 top-0 text-xl p-sm underline">{bundle.displayName} Details</div>
					</div>
					<h1 className="text-3xl p-sm pt-12 mb-2 text-red-200">{bundle.displayName}</h1>
					<div>
						<img src={bundle.displayIcon} alt={bundle.displayName} className="h-full object-contain"/>
					</div>
				</div>
			) : null
	)
}