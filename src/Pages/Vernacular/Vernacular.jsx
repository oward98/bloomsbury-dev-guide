import React, { useState } from 'react';
import { Main } from '../../Components/Main/Main';
import { SideNav } from '../../Components/SideNav/SideNav';
import { Route } from 'react-router';
import { addLinkToPages } from '../../data/processData';
import { getPhotos } from '../../flickrAPI/getPhotos';

const VernacularRoute = ({page}) => {
    const [images, setImages] = useState([]);
    const { link, name, flickrSrc } = page;

    if (flickrSrc && !images.length) {
        getPhotos(flickrSrc, {sizeSuffix: "w"})
        .then(photos => setImages(photos));
    }
    
    const VernacularRoute = <Route key={link} path={link} exact><Main title={name} images={images}/></Route>
    return VernacularRoute;
}

export const Vernacular = () => {
    const newVernacularData = require('../../data/vernacular.json');
    addLinkToPages(newVernacularData, '/vernacular');

    return (
        <div id='mainDiv' className='extraWideMargin'>
            <SideNav pages={newVernacularData}/>
            {newVernacularData.map((parentPage, index) => <VernacularRoute page={parentPage} key={index}/>)}
            {newVernacularData.map(parentPage => parentPage.children.map((childPage, index) => <VernacularRoute page={childPage} key={index}/>))}
        </div>
    )
}