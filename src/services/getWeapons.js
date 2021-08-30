export default function getWeapons ({ weapon_uuid = '' } = {}) {
    const url_weapons = `https://valorant-api.com/v1/weapons/${weapon_uuid}`
    
    return fetch(url_weapons)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            if (Array.isArray(data)) {
                const weapons = data.map(weapon => {
                    const { displayIcon, displayName, uuid, category } = weapon

                    return { displayIcon, displayName, uuid, category }
                })
                return weapons
            }
        })
}