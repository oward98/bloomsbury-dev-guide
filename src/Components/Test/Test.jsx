import React from 'react';
import { Header } from '../Header/Header';
import './Test.css';

const importanceColours = {
    'Critical': 'red',
    'High': 'coral',
    'Medium': 'rgb(146, 155, 16)',
    'Low': 'green'
}

export const Test = ({title, importance, description}) => {
    const colour = importanceColours[importance];
    const headerSpans = [
        <span>Importance: <mark style={{color: colour}}>{importance}</mark></span>
    ];
    return (
        <main>
            <Header spans={headerSpans}>{title}</Header>
            <article>
                <p>{description}</p>
            </article>
        </main>
    )
}