import React from 'react';
import { Test } from '../../Components/Test/Test';
import { SideNav } from '../../Components/SideNav/SideNav';
import { Routes } from '../../Routes/Routes';
import { Route } from 'react-router-dom';
import TestHome from './TestHome/TestHome';
import ImportanceSidebar from './ImportanceSidebar/ImportanceSidebar';
 
const testsRoutesData = [
    {
        title: 'Scale',
        link: '/tests/scale',
        component: <Test />,
        props: {
            title: 'Scale',
            importance: 'Critical',
            description: 'How big it is',
            images: [
                
            ]
        }
    },
    {
        title: 'Materials',
        link: '/tests/materials',
        component: <Test />,
        props: {
            title: 'Materials',
            importance: 'Critical',
            description: 'Consistency of materials with surrounding environment',
            images: [
                
            ]
        }
    },
    {
        title: 'Conservation',
        link: '/tests/conservation',
        component: <Test />,
        props: {
            title: 'Conservation',
            importance: 'Critical',
            description: 'Extent to which preexisting heritage is actively destroyed or restored',
            images: [
                
            ]
        }
    },
    {
        title: 'Solid-to-Void Ratio',
        link: '/tests/solid-to-void-ratio',
        component: <Test />,
        props: {
            title: 'Solid-to-Void Ratio',
            importance: 'Critical',
            description: 'Essentially the proportion of glazing.',
            images: [
                
            ]
        }
    },
    {
        title: 'Mass',
        link: '/tests/mass',
        component: <Test />,
        props: {
            title: 'Mass',
            importance: 'High',
            description: 'The way in which the scale is articulated.',
            images: [
                
            ]
        }
    },
    {
        title: 'Beauty',
        link: '/tests/beauty',
        component: <Test />,
        props: {
            title: 'Beauty',
            importance: 'High',
            description: 'The aesthetic quality of the design.',
            images: [
                
            ]
        }
    },
    {
        title: 'Proportions',
        link: '/tests/proportions',
        component: <Test />,
        props: {
            title: 'Proportions',
            importance: 'High',
            description: 'Whether the proportions are harmonious, reflective of surroundings.',
            images: [
                
            ]
        }
    },
    {
        title: 'Balance',
        link: '/tests/balance',
        component: <Test />,
        props: {
            title: 'Balance',
            importance: 'Medium',
            description: 'Symmetry, appropriate proportions, etc',
            images: [
                
            ]
        }
    },
    {
        title: 'Plot Width',
        link: '/tests/plot-width',
        component: <Test />,
        props: {
            title: 'Plot Width',
            importance: 'Medium',
            description: 'Width of plot of development compared to surroundings.',
            images: [
                
            ]
        }
    },
    {
        title: 'Relationship to Street',
        link: '/tests/relationship-to-street',
        component: <Test />,
        props: {
            title: 'Relationship to Street',
            importance: 'Medium',
            description: 'Railings, basement levels, shopfronts, etc.',
            images: [
                
            ]
        }
    },
    {
        title: 'Roofscape',
        link: '/tests/roofscape',
        component: <Test />,
        props: {
            title: 'Roofscape',
            importance: 'Medium',
            description: 'Interest of roofscape as compared to local historic environment. E.g. expressed party walls, parapets, etc',
            images: [
                
            ]
        }
    },
    {
        title: 'Use',
        link: '/tests/use',
        component: <Test />,
        props: {
            title: 'Use',
            importance: 'Medium',
            description: 'The appropriateness of the use given the surroundings.',
            images: [
                
            ]
        }
    },
    {
        title: 'Detailing',
        link: '/tests/detailing',
        component: <Test />,
        props: {
            title: 'Detailing',
            importance: 'Low',
            description: 'Use of detailing, adding interest to facade.',
            images: [
                
            ]
        }
    },
    {
        title: 'Street Environment',
        link: '/tests/street-environment',
        component: <Test />,
        props: {
            title: 'Street Environment',
            importance: 'Low',
            description: 'Contribution to street environment, via planning obligations etc',
            images: [
                
            ]
        }
    },
    {
        title: 'Vertical Hierarchy',
        link: '/tests/vertical-hierarchy',
        component: <Test />,
        props: {
            title: 'Vertical Hierarchy',
            importance: 'Low',
            description: 'Heights of different floors/buildings reflecting their importance.',
            images: [
                
            ]
        }
    }
]

export const Tests = () => {
    return (
        <div id='mainDiv' className='withSidebar sidesPadded'>
            <SideNav heading='tests' routesData={testsRoutesData}/>
            <Routes routesData={testsRoutesData}/>
            <Route path='/tests/' exact>
                <TestHome />
            </Route>
            <ImportanceSidebar />
        </div>  
    )
}