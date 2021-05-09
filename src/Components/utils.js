import React from 'react';

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