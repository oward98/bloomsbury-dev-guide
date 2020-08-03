import React from 'react';
import { calculateScore } from './utils';
import { BackButton } from './BackButton';
import { ImageMasonry } from './ImageMasonry';
import './Building.css';
import StarRatings from 'react-star-ratings';

const prettifyRating = (rating) => {
    const prettifiedRatings = {
        "scale": "Scale",
        "mass": "Mass",
        "quality": "Aesthetic Quality",
        "conservation": "Conservation",
        "materials": "Materials",
        "solid_to_void": "Solid-to-Void Ratio",
        "proportions": "Proportions",
        "balance": "Balance",
        "use": "Use",
        "plot_width": "Plot Width",
        "vertical_hierarchy": "Vertical Hierarchy",
        "relationship_to_street": "Relationship to Street",
        "roofscape": "Roofscape"
    }
    return prettifiedRatings[rating];
}

export const Building = ({buildingObject}) => {
    const { name, year, address, architect, images, rating } = buildingObject;
    return (
        <div className='buildingPage'>
            <div className='mainContent'>
                <header>
                    <div id='titleBar'>
                        <div id='titleAndBack'>
                            <BackButton />
                            <h1>{name}</h1>
                        </div>
                        <span id='statSummary'>{calculateScore(rating)} stars  &middot;  {address}  &middot;  {architect}  &middot;  {year}</span>
                    </div>
                </header>
                <main>
                    <ImageMasonry imageObjects={images}/>
                </main>
            </div>
            <aside id='buildingRating'>
                <ul id='ratingsList'>
                    {
                        Object.keys(rating).map(ratingName => {
                            const score = rating[ratingName];
                            return (
                                <li>{prettifyRating(ratingName)}{`\n`}<span className='rating'><StarRatings rating={score} starDimension='15px' starSpacing='2px' starRatedColor='rgb(201, 174, 22)'/></span></li>
                            )
                        })
                    }
                </ul>
            </aside>
        </div>
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