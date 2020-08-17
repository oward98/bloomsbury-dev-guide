import React from 'react';
import { Routes } from '../../Routes/Routes';
import { Main } from '../Main/Main';
import { Building } from '../../Components/Building/Building';
import { Route } from 'react-router-dom';

const buildingsData = require('../../data/ratings/redevelopment.json');
const buildingsRoutesData = buildingsData.map(buildingObject => {
    return ({
        title: buildingObject.name,
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
                <Main title='Development Ratings' blocksPath='ratings/redevelopment.json'/>
            </Route>
            <Routes routesData={buildingsRoutesData} />
        </div>  
    )
}