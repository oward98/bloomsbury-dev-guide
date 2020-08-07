import React from 'react';
import { SideNav } from './SideNav';
import { Routes } from './Routes';
import { Main } from './Main';
import { Building } from '../Components/Building/Building';

const ratingsRoutesData = [
    {
        title: 'Redevelopment',
        link: '/ratings/redevelopment',
        component: <Main />,
        props: {
            title: 'Redevelopment',
            blocks_path: 'ratings/redevelopment.json'
        }
    },
    {
        title: 'Alterations',
        link: '/ratings/alterations',
        component: <Main />,
        props: {
            title: 'Alterations'
        }
    },
    {
        title: 'Shopfronts',
        link: '/ratings/shopfronts',
        component: <Main />,
        props: {
            title: 'Shopfronts'
        }
    },
    {
        title: 'Streetworks',
        link: '/ratings/streetworks',
        component: <Main />,
        props: {
            title: 'Streetworks'
        }
    }
]


const buildingsData = require('./data/ratings/redevelopment.json');
const buildingsRoutesData = buildingsData.map(buildingObject => {
    return ({
        title: buildingObject.name,
        link: `/ratings/redevelopment/${buildingObject.slug}`,
        component: <Building />,
        props: {
            buildingObject
        }
    }) 
})

export const Ratings = () => {
    return (
        <div id='mainDiv'>
            <SideNav heading='Ratings' routesData={ratingsRoutesData} />
            <Routes routesData={ratingsRoutesData} />
            <Routes routesData={buildingsRoutesData} />
        </div>  
    )
}