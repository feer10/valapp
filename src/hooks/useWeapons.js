import { useContext, useEffect } from "react";
import WeaponsContext from "../context/WeaponsContext";
import getWeapons from "../services/getWeapons";

export function useWeapons ({ weapon }) {
    const {weapons, setWeapons} = useContext(WeaponsContext) 
    
    useEffect(function () {
        getWeapons({ weapon })
            .then(weapons => {
                setWeapons(weapons)
                localStorage.setItem('lastWeapon', weapon)
            })
    }, [weapon, setWeapons])
    return {weapons}
}