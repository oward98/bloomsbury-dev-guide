import React from 'react';
import { SideNav } from '../../Components/SideNav/SideNav';
import { Route } from 'react-router-dom';
import TestsHome from './TestsHome/TestsHome';
import TestsRoutes from './TestsRoutes/TestsRoutes';
import ImportanceSidebar from './ImportanceSidebar/ImportanceSidebar';
import createSideNavData from './helpers/createSideNavData';

export const Tests = () => {
    const sideNavData = createSideNavData();
    return (
        <div id='mainDiv' className='withSidebar sidesPadded'>
            <SideNav heading='tests' routesData={sideNavData}/>
            <TestsRoutes />
            <Route path='/tests/' exact>
                <TestsHome />
            </Route>
            <ImportanceSidebar />
        </div>  
    )
}