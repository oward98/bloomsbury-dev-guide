import React from 'react';
import './Block.css';
import { Link } from 'react-router-dom';
import { calculateScore, createImage } from '../utils';
import StarRatings from 'react-star-ratings';

export default ({title, image, link, options}) => {
    const imageToRender = createImage(image);
    const { rating, summary } = options;
    let ratingToRender = null;
    if (rating) {
        const score = calculateScore(rating);
        ratingToRender = <span id='blockRating'><StarRatings rating={score} starDimension='15px' starSpacing='2px' starRatedColor='rgb(201, 174, 22)'/> {score}</span>
    }
    let descriptionToRender = null;
    if (summary) {
        descriptionToRender = <p>{summary}</p>
    }
    return (
            <Link to={link} className='blockLink'>
                <section className='exampleBlock'>
                    <div className='exampleBanner'>
                        {imageToRender}
                    </div>
                    <header>
                        <h2>{title}</h2>
                        {ratingToRender}
                    </header>
                    {descriptionToRender}
                </section>
            </Link>
    )
}