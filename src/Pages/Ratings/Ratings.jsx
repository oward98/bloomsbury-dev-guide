import React from 'react';
import { Main } from '../../Components/Main/Main';
import { Building } from './Building/Building';
import { Route } from 'react-router-dom';
import { addLinkToPages } from '../../data/processData';

const BuildingRoute = ({page}) => {
    const BuildingRoute = <Route key={page.link} path={page.link} exact><Building buildingObject={page}/></Route>
    return BuildingRoute;
}

export const Ratings = () => {
    const buildingsData = require('../../data/buildings.json');
    addLinkToPages(buildingsData, '/ratings');
    const buildingRoutes = buildingsData.map((building, index) => <BuildingRoute page={building} key={index}/>)

    return (
        <div id='mainDiv' className='wideMargin'>
            <Route path='/ratings/' exact>
                <Main blocksPath='buildings.json'/>
            </Route>
            {buildingRoutes}
        </div>  
    )
}