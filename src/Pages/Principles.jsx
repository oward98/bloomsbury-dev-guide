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
            importance: 'Critical',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Materials',
        link: '/principles/materials',
        component: <Principle />,
        props: {
            title: 'Materials',
            importance: 'Critical',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Conservation',
        link: '/principles/conservation',
        component: <Principle />,
        props: {
            title: 'Conservation',
            importance: 'High',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Mass',
        link: '/principles/mass',
        component: <Principle />,
        props: {
            title: 'Mass',
            importance: 'High',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Solid-to-Void Ratio',
        link: '/principles/solid-to-void-ratio',
        component: <Principle />,
        props: {
            title: 'Solid-to-Void Ratio',
            importance: 'High',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Aesthetic Quality',
        link: '/principles/aesthetic-quality',
        component: <Principle />,
        props: {
            title: 'Aesthetic Quality',
            importance: 'High',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Proportions',
        link: '/principles/proportions',
        component: <Principle />,
        props: {
            title: 'Proportions',
            importance: 'High',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Balance',
        link: '/principles/balance',
        component: <Principle />,
        props: {
            title: 'Balance',
            importance: 'High',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Plot Width',
        link: '/principles/plot-width',
        component: <Principle />,
        props: {
            title: 'Plot Width',
            importance: 'Medium',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Relationship to Street',
        link: '/principles/relationship-to-street',
        component: <Principle />,
        props: {
            title: 'Relationship to Street',
            importance: 'Medium',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Roofscape',
        link: '/principles/roofscape',
        component: <Principle />,
        props: {
            title: 'Roofscape',
            importance: 'Medium',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Use',
        link: '/principles/use',
        component: <Principle />,
        props: {
            title: 'Use',
            importance: 'Medium',
            description: 'description here',
            images: [
                
            ]
        }
    },
    {
        title: 'Vertical Hierarchy',
        link: '/principles/vertical-hierarchy',
        component: <Principle />,
        props: {
            title: 'Vertical Hierarchy',
            importance: 'Low',
            description: 'description here',
            images: [
                
            ]
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