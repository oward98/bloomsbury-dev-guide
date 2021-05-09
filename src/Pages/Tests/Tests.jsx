import React from 'react';
import { Route } from 'react-router-dom';
import TestsHome from './TestsHome/TestsHome';
import ImportanceSidebar from './ImportanceSidebar/ImportanceSidebar';
import { SideNav } from '../../Components/SideNav/SideNav';
import { Test } from './Test/Test';
import { addLinkToPages } from '../../data/processData';

const TestRoute = ({page}) => {
    const { link, name, importance, summary,  } = page;
    const TestRoute = <Route key={link} path={link} exact><Test name={name} importance={importance} summary={summary} /></Route>
    return TestRoute;
}

export const Tests = () => {
    const tests = require('../../data/tests.json');
    addLinkToPages(tests, '/tests');

    return (
        <div id='mainDiv' className='withSidebar extraWideMargin'>
            <SideNav pages={tests}/>
            {tests.map((test, index) => <TestRoute page={test} key={index}/>)}
            <Route path='/tests/' exact>
                <TestsHome />
            </Route>
            <ImportanceSidebar />
        </div>  
    )
}