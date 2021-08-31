export default function getMaps ({ map_uuid = '' } = {}) {
    const url_maps = `https://valorant-api.com/v1/maps/${map_uuid}`
    
    return fetch(url_maps)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            if (Array.isArray(data)) {
                const maps = data.map(map => {
                    const { splash, displayName, uuid } = map

                    return { splash, displayName, uuid }
                })
                return maps
            }
        })
}