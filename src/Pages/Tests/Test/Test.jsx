import React from 'react';
import { Header } from '../../../Components/Header/Header';
import './Test.css';

const importanceColours = {
    'Critical': 'red',
    'High': 'coral',
    'Medium': 'goldenrod',
    'Low': 'green'
}

export const Test = ({name, importance, summary}) => {
    const colour = importanceColours[importance];
    const headerSpans = [
        <span>Importance: <mark style={{color: colour}}>{importance}</mark></span>
    ];
    return (
        <main className='fillSpace'>
            <Header spans={headerSpans}>{name}</Header>
            <article>
                <p>{summary}</p>
            </article>
        </main>
    )
}