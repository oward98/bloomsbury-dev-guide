import React from 'react';
import './Principle.css'

const importanceColours = {
    'Critical': 'red',
    'High': 'coral',
    'Medium': 'rgb(146, 155, 16)',
    'Low': 'green'
}

export const Principle = ({title, importance, description, images}) => {
    const colour =  importanceColours[importance];
    console.log(colour);
    return (
        <main>
            <header>
                <h1>{title}</h1>
                <span>Importance: <mark style={{color: colour}}>{importance}</mark></span>
            </header>
            <article>
                <p>
                    {description}
                </p>
            </article>
        </main>
    )
}