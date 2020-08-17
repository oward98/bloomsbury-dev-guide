import React from 'react';

export const calculateScore = rating => {
    let score = 0;
    const scores = {
        scale: 5,
        mass: 5,
        conservation: 5,
        quality: 3,
        materials: 3,
        solid_to_void: 2,
        proportions: 2,
        balance: 2,
        use: 2,
        plot_width: 2,
        vertical_hierarchy: 1,
        relationship_to_street: 1,
        roofscape: 1
    }
    Object.keys(rating).forEach(field => {
        score += rating[field];
    })
    const maxScore = 5*Object.keys(scores).length;
    const numOfStars = 5;
    const unroundedScore = (score/maxScore)*numOfStars;
    const finalScore = unroundedScore.toFixed(1);
    return parseFloat(finalScore);
}

export const createImage = imageObject => <img src={imageObject.url} alt={imageObject.alt} loading={'lazy'}/>

export const prettifyRating = (rating) => {
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