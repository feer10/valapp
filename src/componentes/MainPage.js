/* eslint-disable no-undef */
import React from 'react'

export default function MainPage () {
    return (
        <div className="flex p-md flex-col relative text-white items-center justify-center">
            <div className="image_wrapper">
                <img src={`${process.env.PUBLIC_URL}/valorant_name.png`} alt='logo_name' className="max-h-10" />
            </div>
            <h1 className="text-3xl p-sm pt-12">Info App <small className="text-sm">by Fer</small></h1>
            <div className="p-sm">
                Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisi inceptos ad ornare, 
                on augue tincidunt torquent. Vitae orci euismod pellentesque pharetra mollis conubia 
                turpis feugiat aenean magna mi, imperdiet fames ullamcorper primis dui porttitor nulla cras quis.
                Magnis dictum vulputate rhoncus sociis gravida sociosqu laoreet suspendisse, nulla tincidunt class
                euismod tortor fames torquent, sed netus ornare enim varius sollicitudin auctor.
            </div>
        </div>
    )
}