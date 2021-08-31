import React from 'react'
import { useMaps } from '../hooks/useMaps';
import MapsIcons from './MapsIcons';

export default function ListOfMaps (params) {
    const { map_indv } = params
    const {maps} = useMaps({map_indv})

    return (
    <div className="flex flex-wrap p-4 justify-center">
        {
            maps.map(({ uuid, splash, displayName }) =>
                <MapsIcons 
                    key={uuid}
                    mapId={uuid}
                    splash={splash}
                    displayName={displayName}
                />
            )
        }
    </div>
    )
}
