import React from 'react';
import algorithm from '../helpers/algorithm';
import { ImageMasonry } from '../../../Components/ImageMasonry/ImageMasonry';
import RatingBar from '../../../Components/RatingBar/RatingBar';
import { RatingsSidebar } from '../RatingsSidebar/RatingsSidebar'; 
import { Header } from '../../../Components/Header/Header';
import './Building.css';

export const Building = ({buildingObject}) => {
    const { name, year, address, description, architect, images, rating } = buildingObject;
    const ratingToPass = algorithm(rating);
    const headerSpans = [
        <span><RatingBar rating={ratingToPass} width={150} height={2}/></span>,
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