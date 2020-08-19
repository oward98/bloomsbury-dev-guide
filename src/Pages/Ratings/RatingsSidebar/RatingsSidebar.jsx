import React from 'react';
import { prettifyRating } from '../../../Components/utils';
import StarRatings from 'react-star-ratings';
import './RatingsSidebar.css';

export const RatingsSidebar = ({rating}) => {
    const ratingListElements = Object.keys(rating).map(ratingName => {
        const score = rating[ratingName];
        const stars = <StarRatings rating={score} starDimension='12px' starSpacing='1px' starRatedColor='rgb(201, 174, 22)' />
        return <li>{prettifyRating(ratingName)}{`\n`}{stars}</li>
    })
    return (
        <aside id='ratingsSidebar'>
            <ul>
                {ratingListElements}
            </ul>
        </aside>
    ) 
}