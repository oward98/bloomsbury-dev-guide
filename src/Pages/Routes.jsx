import React from 'react';
import { Route } from 'react-router-dom';

const addProps = (component, props) => React.cloneElement(component, props);

const createRoute = ({link, component, props: componentProps}) => {
    console.log(componentProps);
    return <Route path={link} exact render={props => React.cloneElement(addProps(component, componentProps), {...props})} />
}

export const Routes = ({routesData}) => {
    let routeDataArray = [];
    Object.keys(routesData).forEach(routeSection => {
        routeDataArray = routeDataArray.concat(routesData[routeSection]);
    })
    const routes = routeDataArray.map(routeData => createRoute(routeData));
    return (
        <>
            {routes}
        </>
    )
}