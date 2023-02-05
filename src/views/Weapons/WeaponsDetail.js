import React from 'react'
import { useParams } from 'react-router'
import WeaponStats from './components/WeaponStats'
import SkinsIcons from './components/SkinsIcons'
import { useGetWeaponByNameQuery } from '../../services/valorantApi'

export default function WeaponsDetails () {
	const { weaponId } = useParams()
	const { data, error, isLoading } = useGetWeaponByNameQuery(weaponId)
	const weapon = data && data.data;

	return (
		error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<div className="flex p-md flex-col relative text-white items-center justify-center">
					<div>
						<div className="absolute left-5 top-0 text-xl p-sm underline">Weapon Details</div>
					</div>
					<h1 className="text-3xl p-sm pt-12 mb-2 text-red-200">{weapon.displayName}</h1>
					<div>
						<img src={weapon.displayIcon} alt={weapon.displayName} className="h-40 object-contain"/>
					</div>
					<div className="pt-8">
						{
							weapon.weaponStats && 
							<WeaponStats
								fireRate={weapon.weaponStats?.fireRate}
								magazineSize={weapon.weaponStats?.magazineSize}
								reloadTimeSeconds={weapon.weaponStats?.reloadTimeSeconds}
								wallPenetration={weapon.weaponStats?.wallPenetration}
							/>
						}
					</div>
					<div className='pt-8'>
						<h2 className=' text-2xl underline mb-3'>Skins</h2>
						{
							weapon.skins.map(({ uuid, displayIcon, displayName }) =>
								displayIcon && displayName !== 'Random Favorite Skin' &&
								!displayName.includes('Standard') &&
									<SkinsIcons 
										key={uuid}
										weaponId={uuid}
										displayIcon={displayIcon}
										displayName={displayName}
									/>
							)
						}
					</div>
				</div>
			) : null
	)
}