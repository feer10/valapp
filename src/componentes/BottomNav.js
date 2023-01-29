import React, { useState } from 'react';
import {Link} from 'react-router-dom'


export default function BottomNav () {

    const [activeClass, setClass] = useState({
        activeMenu: null,
        menuLinks: [
            { url: '', name: 'Home' },
            { url: 'agents', name: 'Agents' },
            { url: 'weapons', name: 'Weapons' },
            { url: 'maps', name: 'Maps' },
            { url: 'bundles', name: 'Bundles' }
        ]
    });
    function toggleActive(index) {
        setClass({ ...activeClass, activeMenu: activeClass.menuLinks[index] })
    }

    function toggleActiveStyles(index) {
        if (activeClass.menuLinks[index] === activeClass.activeMenu) {
            return "w-1/5 border-r border-white p-sm hover:bg-gray-100 hover:text-black bg-gray-100 text-black last:border-r-0"
        } else {
            return "w-1/5 border-r border-white p-sm hover:bg-gray-100 hover:text-black last:border-r-0"
        }
    }

    return (
        <nav className="fixed border-t border-red-500 w-full bottom-0 h-18 bg-gray-800
            flex flex-wrap text-white items-center shadow-up justify-between z-50">
            {activeClass.menuLinks.map((elements, index) => (
                <Link 
                    key={index+elements.name}
                    to={`/${elements.url}`}
                    onClick={() => {
                        toggleActive(index)
                    }}
                    className={toggleActiveStyles(index)}>
                    {elements.name}
                    <span className="block">⋄</span>
               </Link>
            ))}
        </nav>
    )
}