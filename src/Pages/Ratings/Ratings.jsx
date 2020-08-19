import React from 'react';
import { Routes } from '../../Routes/Routes';
import { Main } from '../Main/Main';
import { Building } from './Building/Building';
import { Route } from 'react-router-dom';

const buildingsData = require('../../data/ratings/buildings.json');
const buildingsRoutesData = buildingsData.map(buildingObject => {
    return ({
        link: `/ratings/${buildingObject.slug}`,
        component: <Building />,
        props: {
            buildingObject
        }
    })
})

export const Ratings = () => {
    return (
        <div id='mainDiv' className='sidesPadded'>
            <Route path='/ratings/' exact>
                <Main title='Development Ratings' blocksPath='ratings/buildings.json'/>
            </Route>
            <Routes routesData={buildingsRoutesData} />
        </div>  
    )
}