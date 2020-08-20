import React from 'react';
import { detailedScores, calculateMaxIndividualScore } from '../helpers/algorithm';
import './RatingsSidebar.css';
import { IndividualRatingBar } from '../../../Components/RatingBar/RatingBar';

export const RatingsSidebar = ({rating}) => {
    const scores = detailedScores(rating);
    const maxScore = calculateMaxIndividualScore();
    const ratingListElements = scores.map(scoreObject => {
        const {name, ratingType, score} = scoreObject;
        return <li>{name}{`\n`}<IndividualRatingBar ratingType={ratingType} score={score} height={3}/></li>
    })
    return (
        <aside id='ratingsSidebar'>
            <ul>
                {ratingListElements}
            </ul>
        </aside>
    ) 
}