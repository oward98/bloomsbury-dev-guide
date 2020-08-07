import React from 'react';
import { calculateScore } from '../utils';
import { ImageMasonry } from '../ImageMasonry/ImageMasonry';
import { RatingsSidebar } from '../RatingsSidebar/RatingsSidebar'; 
import { Header } from '../Header/Header';
import './Building.css';
import StarRatings from 'react-star-ratings';

export const Building = ({buildingObject}) => {
    const { name, year, address, description, architect, images, rating } = buildingObject;
    const totalScore = calculateScore(rating);
    const headerSpans = [
        <span><StarRatings rating={totalScore} starDimension='15px' starSpacing='2px' starRatedColor='rgb(201, 174, 22)'/> {totalScore}</span>,
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

/*
{
    "name": "Building Name",
    "span": "Short description",
    "slug": "url-endpoint",
    "description",
    "year": ,
    "designation": ,
    "address": ,
    "architect": ,
    "images": [
        {
            "url": "image-url",
            "alt": "alt-text",
            "caption": "caption for image" 
        }
    ],
    "rating": {
        "scale": true,
        "mass": true,
        "quality": true,
        "materials": true,
        "solid_to_void": true,
        "proportions": true,
        "balance": true,
        "use": true,
        "plot_width": true,
        "vertical_hierarchy": true,
        "relationship_to_street": true,
        "roofscape": true
    }
}
*/