import React from 'react';
import { Test } from '../Test/Test';
import { Main } from '../../Main/Main';
import { Routes } from '../../../Routes/Routes';

//draws all data from tests.json

export default () => {
    const testData = require('../../../data/tests/tests.json');
    //populate categories
    let categories = [];
    testData.forEach(test => {
        if (!categories.includes(test.importance)) categories.push(test.importance);
    })

    //create routes for importance category pages
    const categoryRoutesData = categories.map(category => {
        console.log(category);
        return {
            link: `/tests/${category.toLowerCase()}/`,
            component: <Main/>,
            props: {
                title: category
            }
        }
    })
    const categoryRoutes = <Routes routesData={categoryRoutesData}/>

    //now create routes for each individual test
    const testRoutesData = testData.map(test => {
        const category = test.importance;
        const categorySlug = category.toLowerCase();
        return {
            link: `/tests/${categorySlug}/${test.slug}/`,
            component: <Test />,
            props: test
        }
    })
    const testRoutes = <Routes routesData={testRoutesData}/>

    //now return all routes
    return (
        <>
            {categoryRoutes}
            {testRoutes}
        </>
    )
}