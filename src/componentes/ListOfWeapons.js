import React from 'react'
import WeaponsIcons from './WeaponsIcons'
import { useWeapons } from '../hooks/useWeapons';
import _ from 'lodash';

export default function ListOfWeapons (params) {
    const { weapon } = params
    const {weapons} = useWeapons({weapon})

    const grouped_weapons = _.groupBy(weapons, 'category');
    console.log(grouped_weapons)

    return (
        <div className="flex flex-wrap p-4 justify-center">
            {
                Object.entries(grouped_weapons).map(([id, value]) => (
                    <div className="border border-white">
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

            }
        </div>
    )
}
