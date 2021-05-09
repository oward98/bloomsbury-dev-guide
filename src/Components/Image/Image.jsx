import React from 'react';
import './Image.css';

export const Image = ({url, description}) => {
    return (
        <figure className='imageFigure'>
            <img src={url} alt={description} />
            <figcaption>{description && description}</figcaption>
        </figure>
    )
}