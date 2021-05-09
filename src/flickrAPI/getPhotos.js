import React from 'react';
import { Image } from '../Components/Image/Image';

const getPhotoDetails = (photo, { sizeSuffix = "o" } = {}) => {
    const { url_o, description } = photo;
    const urlDifferentSuffix = url_o.replace("_o.jpg", `_${sizeSuffix}.jpg`)
    return {
        url: urlDifferentSuffix,
        description: description._content
    }
}

export const getPhotos = (photosetId, { sizeSuffix = "o" } = {}) => {
    const {userId, apiKey} = require("./flickrInfo.json");
    const flickrEndpoint = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photosetId}&user_id=${userId}&extras=url_o,description&format=json&nojsoncallback=1`

    return new Promise((resolve, reject) => {
        fetch(flickrEndpoint)
        .then(response => response.json())
        .then(response => {
            const photos = response.photoset.photo;
            const photoURLs = photos.map(photo => getPhotoDetails(photo, {sizeSuffix: sizeSuffix}));
            const images = photoURLs.map(({url, description}, index) => {
                return <Image url={url} description={description} key={index}/>
            });
            resolve(images);
        })
        .catch(error => reject(error));
    })
}