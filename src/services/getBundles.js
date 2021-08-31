export default function getBundles ({ bundle_uuid = '' } = {}) {
    const url_bundles = `https://valorant-api.com/v1/bundles/${bundle_uuid}`
    
    return fetch(url_bundles)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            if (Array.isArray(data)) {
                const bundles = data.map(bundle => {
                    const { displayIcon, displayName, uuid } = bundle

                    return { displayIcon, displayName, uuid }
                })
                return bundles
            }
        })
}