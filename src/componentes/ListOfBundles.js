import React from 'react'
import { useBundles } from '../hooks/useBundles';
import BundlesIcons from './BundlesIcons';
import { BundlesContextProvider } from '../context/BundlesContext';

export default function ListOfBundles (params) {
    const { bundle } = params
    const {bundles} = useBundles({bundle})

    return (
    <BundlesContextProvider>
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
    </BundlesContextProvider>
    )
}
