import { useContext, useEffect } from "react";
import BundlesContext from "../context/BundlesContext";
import getBundles from "../services/getBundles";

export function useBundles ({ bundle }) {
    const {bundles, setBundles} = useContext(BundlesContext) 
    
    useEffect(function () {
        getBundles({ bundle })
            .then(bundles => {
                setBundles(bundles)
                localStorage.setItem('lastBundle', bundle)
            })
    }, [bundle, setBundles])
    return {bundles}
}