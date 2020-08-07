import React from 'react';
import './Header.css';

export const Header = ({children, spans}) => {
    let spansToRender;
    if (spans) spansToRender = spans.map(span => <summary>{span}</summary>)
    return (
        <header id='mainHeader'>
            <h1>{children}</h1>
            {spansToRender ? spansToRender : null}
        </header>
    )
}

/*

<header>
                    <div id='titleBar'>
                        <h1 id='buildingName'>{name}</h1>
                        <span><StarRatings rating={totalScore} starDimension='15px' starSpacing='2px' starRatedColor='rgb(201, 174, 22)'/> {totalScore}</span>
                        <br />
                        <span>{address} &middot; {architect} &middot; {year}</span>
                    </div>
                </header>

                */