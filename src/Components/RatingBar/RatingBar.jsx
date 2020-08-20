import React from 'react';
import './RatingBar.css';
import { calculateMaxIndividualScore } from '../../Pages/Ratings/helpers/algorithm';

export const TotalRatingBar = ({rating, width, height}) => {
    let {positiveScore, neutralScore, negativeScore} = rating;
    //convert to percentages
    positiveScore *=100;
    neutralScore *= 100;
    negativeScore *= 100;
    //return
    return (
        <div className='ratings' style={{width: `${width}px`}}>
            <div className='ratingBar' style={{height: `${height}px`}}>
                <div className='positive' style={{width: `${positiveScore}%`}}></div>
                <div className='neutral' style={{width: `${neutralScore}%`}}></div>
                <div className='negative' style={{width: `${negativeScore}%`}}></div>
            </div>
            <div className='ratingPercentages'>
                <span className='positive'>{positiveScore.toFixed(0)}%</span>
                <span className='neutral'>{neutralScore.toFixed(0)}%</span>
                <span className='negative'>{negativeScore.toFixed(0)}%</span>
            </div>
        </div>
        
    )
}

export const IndividualRatingBar = ({score, ratingType, width, height}) => {
    const maxScore = calculateMaxIndividualScore();
    const unroundedPercentageScore = 100*(score/maxScore);
    const percentageScore = unroundedPercentageScore.toFixed(0);
    return (
        <div style={{height: `${height}px`, width: `${width}px`}} className='ratings ratingBar'>
            <div style={{width: `${percentageScore}%`}} className={ratingType}></div>
        </div>
    )
}