import React from 'react';
import { Link } from 'react-router-dom';
import { calculateScore, createImage } from './utils';
import StarRatings from 'react-star-ratings';


export const Block = ({blockData}) => {
    const { name, slug, images, rating } = blockData;
    const score = calculateScore(rating);
    const imageElements = images.map(image => createImage(image));
    return (
        <Link to={`/ratings/redevelopment/${slug}`}>
            <section className='exampleBlock'>
                <div className='exampleBanner'>
                    {imageElements[0]}
                </div>
                <header>
                    <h2>{name}</h2>
                    <span className='rating'><StarRatings rating={score} starDimension='15px' starSpacing='2px' starRatedColor='rgb(201, 174, 22)'/> {score}</span>
                </header>
            </section>
        </Link>
    )
}