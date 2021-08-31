import { useContext, useEffect } from "react";
import MapsContext from "../context/MapsContext";
import getMaps from "../services/getMaps";

export function useMaps ({ map_indv }) {
    const {maps, setMaps} = useContext(MapsContext) 
    
    useEffect(function () {
        getMaps({ map_indv })
            .then(maps => {
                setMaps(maps)
                localStorage.setItem('lastMap', map_indv)
            })
    }, [map_indv, setMaps])
    return {maps}
}