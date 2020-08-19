import React from 'react';
import './RatingBar.css';

export default ({rating, width, height}) => {
    let {positiveScore, neutralScore, negativeScore} = rating;
    //convert to percentages
    positiveScore *=100;
    neutralScore *= 100;
    negativeScore *= 100;
    //make sure total percentage does not overflow
    console.log(rating);
    neutralScore -=1;
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