import React from 'react';
import { Main } from './Main';
import { SideNav } from './SideNav';
import { Routes } from './Routes';
 
const principlesRoutesData = [
    {
        title: 'Critical',
        link: '/principles/critical',
        component: <Main />,
        props: {
            title: 'Critical'
        },
        subtitles: [
            {
                title: 'Scale',
                link: '/principles/critical/scale',
                component: <Main />,
                props: {
                    title: 'Scale'
                }
            },
            {
                title: 'Mass',
                link: '/principles/critical/mass',
                component: <Main />,
                props: {
                    title: 'Mass'
                }
            },
            {
                title: 'Conservation',
                link: '/principles/critical/conservation',
                component: <Main />,
                props: {
                    title: 'Conservation'
                }
            },
        ]
    },
    {
        title: 'High Importance',
        link: '/principles/high-importance',
        component: <Main />,
        props: {
            title: 'High Importance'
        },
        subtitles: [
            {
                title: 'Materials',
                link: '/principles/high-importance/materials',
                component: <Main />,
                props: {
                    title: 'Materials'
                }
            },
            {
                title: 'Solid-to-Void Ratio',
                link: '/principles/high-importance/solid-to-void-ratio',
                component: <Main />,
                props: {
                    title: 'Solid-to-Void Ratio'
                }
            },
            {
                title: 'Aesthetic Quality',
                link: '/principles/high-importance/aesthetic-quality',
                component: <Main />,
                props: {
                    title: 'Aesthetic Quality'
                }
            },
            {
                title: 'Proportions',
                link: '/principles/high-importance/proportions',
                component: <Main />,
                props: {
                    title: 'Proportions'
                }
            }
        ]
    },
    {
        title: 'Lesser Importance',
        link: '/principles/lesser-importance',
        component: <Main />,
        props: {
            title: 'Lesser Importance'
        },
        subtitles: [
            {
                title: 'Balance',
                link: '/principles/lesser-importance/balance',
                component: <Main />,
                props: {
                    title: 'Balance'
                }
            },
            {
                title: 'Plot Width',
                link: '/principles/lesser-importance/plot-width',
                component: <Main />,
                props: {
                    title: 'Plot Width'
                }
            },
            {
                title: 'Relationship to Street',
                link: '/principles/lesser-importance/relationship-to-street',
                component: <Main />,
                props: {
                    title: 'Relationship to Street'
                }
            },
            {
                title: 'Roofscape',
                link: '/principles/lesser-importance/roofscape',
                component: <Main />,
                props: {
                    title: 'Roofscape'
                }
            },
            {
                title: 'Use',
                link: '/principles/lesser-importance/use',
                component: <Main />,
                props: {
                    title: 'Use'
                }
            },
            {
                title: 'Vertical Hierarchy',
                link: '/principles/lesser-importance/vertical-hierarchy',
                component: <Main />,
                props: {
                    title: 'Vertical Hierarchy'
                }
            },
        ]
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