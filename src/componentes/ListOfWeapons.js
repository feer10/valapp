import React from 'react'
import WeaponsIcons from './WeaponsIcons'
import { useGetDataByNameQuery } from '../services/valorantApi'
import _ from 'lodash';

export default function ListOfWeapons () {
	const { data, error, isLoading } = useGetDataByNameQuery('weapons')
	const grouped_weapons = data ? _.groupBy(data.data, 'category') : [];

	return (
		<div className="flex flex-wrap p-4 justify-center">
			{
				error ? (
					<>Oh no, there was an error</>
				) : isLoading ? (
					<>Loading...</>
				) : grouped_weapons ? (
					Object.entries(grouped_weapons).map(([id, value]) => (
						<div className="border border-white mb-6" key={ id }>
							<h2 className="block text-3xl p-sm underline">{id.split("::")[1]}</h2>
							<div className="flex flex-wrap p-4 justify-center">
								{
									value.map(({ uuid, displayIcon, displayName }) =>
										<WeaponsIcons 
											key={uuid}
											weaponId={uuid}
											displayIcon={displayIcon}
											displayName={displayName}
										/>
									)
								}
							</div>
						</div>
					))
				) : null
			}
		</div>
	)
}
