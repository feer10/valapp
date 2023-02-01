import React from 'react'

export default function WeaponsStats ({ fireRate, magazineSize, reloadTimeSeconds, wallPenetration }) {
	return (
    <div className=' border rounded-md p-2'>
      <h3 className='text-xl underline mb-2'>Weapon Stats</h3>
      <div className='flex flex-col text-left gap-2'>
        <span>Fire Rate: {fireRate}</span>
        <span>Magazine: {magazineSize}</span>
        <span>Reload Time: {reloadTimeSeconds} seconds</span>
        <span>Wall Penetration: {wallPenetration?.split('::')[1]}</span>
      </div>
    </div>
	)
}