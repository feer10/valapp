import React from 'react'
import { useBundles } from '../hooks/useBundles';
import BundlesIcons from './BundlesIcons';

export default function ListOfBundles (params) {
    const { bundle } = params
    const {bundles} = useBundles({bundle})

    return (
    <div className="flex flex-wrap p-4 justify-center">
        {
            bundles.map(({ uuid, displayIcon, displayName }) =>
                <BundlesIcons 
                    key={uuid}
                    bundleId={uuid}
                    displayIcon={displayIcon}
                    displayName={displayName}
                />
            )
        }
    </div>
    )
}
