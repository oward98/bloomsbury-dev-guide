import React from 'react';
import { totalScore } from '../helpers/algorithm';
import { ImageMasonry } from '../../../Components/ImageMasonry/ImageMasonry';
import {TotalRatingBar} from '../../../Components/RatingBar/RatingBar';
import { RatingsSidebar } from '../RatingsSidebar/RatingsSidebar'; 
import { Header } from '../../../Components/Header/Header';
import './Building.css';

export const Building = ({buildingObject}) => {
    const { name, year, address, description, architect, images, rating } = buildingObject;
    const ratingToPass = totalScore(rating);
    const headerSpans = [
        <span><TotalRatingBar rating={ratingToPass} width={150} height={2}/></span>,
        <span>{address} &middot; {architect} &middot; {year}</span>
    ];
    return (
        <main className='buildingPage'>
            <div>
                <Header spans={headerSpans}>{name}</Header>
                <section>
                    <article>
                        <p id='buildingDescription'>
                            {description}
                        </p>
                    </article>
                    <ImageMasonry imageObjects={images} columnWidth='250px'/>
                </section>
            </div>
            <RatingsSidebar rating={rating} />
        </main>
    )
}