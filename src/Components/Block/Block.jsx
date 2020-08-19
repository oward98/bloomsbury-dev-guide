import React from 'react';
import './Block.css';
import { Link } from 'react-router-dom';
import { calculateScore, createImage } from '../utils';
import algorithm from '../../Pages/Ratings/helpers/algorithm';
import RatingBar from '../RatingBar/RatingBar';

export default ({title, image, link, options}) => {
    const imageToRender = createImage(image);
    const { rating, summary } = options;
    let positiveScore;
    let neutralScore;
    let negativeScore;
    if (rating) {
        const score = algorithm(rating);
        positiveScore = score.positiveScore;
        neutralScore = score.neutralScore;
        negativeScore = score.negativeScore;
        //ratingToRender = <span id='blockRating'><StarRatings rating={score} starDimension='15px' starSpacing='2px' starRatedColor='rgb(201, 174, 22)'/> {score}</span>
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
                        <span><RatingBar rating={{positiveScore, neutralScore, negativeScore}} width={150} height={2}/></span>
                    </header>
                    {descriptionToRender}
                </section>
            </Link>
    )
}