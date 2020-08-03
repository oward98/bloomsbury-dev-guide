import React from 'react';
import { Principle } from '../Components/Principle';
import { SideNav } from './SideNav';
import { Routes } from './Routes';
 
const principlesRoutesData = [
    {
        title: 'Scale',
        link: '/principles/scale',
        component: <Principle />,
        props: {
            title: 'Scale',
            importance: 'Critical'
        }
    },
    {
        title: 'Materials',
        link: '/principles/materials',
        component: <Principle />,
        props: {
            title: 'Materials',
            importance: 'Critical',
        }
    },
    {
        title: 'Conservation',
        link: '/principles/conservation',
        component: <Principle />,
        props: {
            title: 'Conservation',
            importance: 'Critical'
        }
    },
    {
        title: 'Mass',
        link: '/principles/mass',
        component: <Principle />,
        props: {
            title: 'Mass',
            importance: 'High'
        }
    },
    {
        title: 'Solid-to-Void Ratio',
        link: '/principles/solid-to-void-ratio',
        component: <Principle />,
        props: {
            title: 'Solid-to-Void Ratio',
            importance: 'High',
        }
    },
    {
        title: 'Aesthetic Quality',
        link: '/principles/aesthetic-quality',
        component: <Principle />,
        props: {
            title: 'Aesthetic Quality',
            importance: 'High',
        }
    },
    {
        title: 'Proportions',
        link: '/principles/proportions',
        component: <Principle />,
        props: {
            title: 'Proportions',
            importance: 'High',
        }
    },
    {
        title: 'Balance',
        link: '/principles/balance',
        component: <Principle />,
        props: {
            title: 'Balance',
            importance: 'High',
        }
    },
    {
        title: 'Plot Width',
        link: '/principles/plot-width',
        component: <Principle />,
        props: {
            title: 'Plot Width',
            importance: 'Medium',
        }
    },
    {
        title: 'Relationship to Street',
        link: '/principles/relationship-to-street',
        component: <Principle />,
        props: {
            title: 'Relationship to Street',
            importance: 'Medium',
        }
    },
    {
        title: 'Roofscape',
        link: '/principles/roofscape',
        component: <Principle />,
        props: {
            title: 'Roofscape',
            importance: 'Medium',
        }
    },
    {
        title: 'Use',
        link: '/principles/use',
        component: <Principle />,
        props: {
            title: 'Use',
            importance: 'Medium',
        }
    },
    {
        title: 'Vertical Hierarchy',
        link: '/principles/vertical-hierarchy',
        component: <Principle />,
        props: {
            title: 'Vertical Hierarchy',
            importance: 'Low',
        }
    }
]

export const Principles = () => {
    return (
        <div id='mainDiv'>
            <SideNav heading='Principles' routesData={principlesRoutesData}/>
            <Routes routesData={principlesRoutesData}/>
        </div>  
    )
}