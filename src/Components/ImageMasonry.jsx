import React from 'react';
import './ImageMasonry.css';

export const ImageMasonry = ({imageObjects}) => {
    const images = imageObjects.map(imageObject => {
        const { url, alt, caption } = imageObject;
        return (
            <figure className='imageBlock'>
                <div clasName='imageContainer'>
                    <img src={url} alt={alt} />
                </div>
                <figcaption>{caption}</figcaption>
            </figure>
        )
    })
    return (
        <section className='blocks'>
            <div className='columns'>
                {images}
            </div>
        </section>
    )
}