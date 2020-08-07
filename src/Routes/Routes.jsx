import React from 'react';
import { Route } from 'react-router-dom';

const addProps = (component, props) => React.cloneElement(component, props);

const createRoute = ({link, component, props: componentProps}) => {
    return <Route path={link} exact render={props => React.cloneElement(addProps(component, componentProps), {...props})} />
}

export const Routes = ({routesData}) => {
    let routeDataArray = [];
    routesData.forEach(topLevelDatum => {
        routeDataArray.push(topLevelDatum);
        if (topLevelDatum.subtitles) routeDataArray = routeDataArray.concat(topLevelDatum.subtitles);
    })
    const routes = routeDataArray.map(routeData => createRoute(routeData));
    return (
        <>
            {routes}
        </>
    )
}