import React from 'react';
import { Main } from './Main';
import { SideNav } from './SideNav';
import { Routes } from './Routes';
 
const principlesRoutesData = {
    "Crucial": [
        {
            title: 'Scale',
            link: '/principles/scale',
            component: <Main />,
            props: {
                title: 'Scale'
            }
        },
        {
            title: 'Mass',
            link: '/principles/mass',
            component: <Main />,
            props: {
                title: 'Mass'
            }
        }
    ],
    "Very Important": [
        {
            title: 'Materials',
            link: '/principles/materials',
            component: <Main />,
            props: {
                title: 'Materials'
            }
        },
        {
            title: 'Solid-to-Void Ratio',
            link: '/principles/solid-to-void-ratio',
            component: <Main />,
            props: {
                title: 'Solid-to-Void Ratio'
            }
        },
        {
            title: 'Proportions',
            link: '/principles/proportions',
            component: <Main />,
            props: {
                title: 'Proportions'
            }
        }
    ],
    "Important": [
        {
            title: 'Vertical Hierarchy',
            link: '/principles/vertical-hierarchy',
            component: <Main />,
            props: {
                title: 'Vertical Hierarchy'
            }
        },
        {
            title: 'Relationship to Street',
            link: '/principles/relationship-to-street',
            component: <Main />,
            props: {
                title: 'Relationship to Street'
            }
        },
        {
            title: 'Roofscape',
            link: '/principles/roofscape',
            component: <Main />,
            props: {
                title: 'Roofscape'
            }
        },
        {
            title: 'Use',
            link: '/principles/use',
            component: <Main />,
            props: {
                title: 'Use'
            }
        }
    ]  
}

export const Principles = () => {
    return (
        <div id='mainDiv'>
            <SideNav heading='Principles' routesData={principlesRoutesData}/>
            <Routes routesData={principlesRoutesData}/>  
        </div>  
    )
}