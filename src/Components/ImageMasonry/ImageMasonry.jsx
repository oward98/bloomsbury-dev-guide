import React from 'react';
import { Columns } from '../Columns/Columns';
import './ImageMasonry.css';

export const ImageMasonry = ({imageObjects, columnWidth}) => {
    const images = imageObjects.map((imageObject, elementIndex) => {
        const { url, alt='', caption='' } = imageObject;
        return (
            <figure className='imageBlock' key={elementIndex}>
                <img src={url} alt={alt} />
                <figcaption>{caption}</figcaption>
            </figure>
        )
    })
    return (
        <Columns columnWidth={columnWidth} >
            {images}
        </Columns>
    )
}