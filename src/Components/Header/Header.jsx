import React from 'react';
import './Header.css';

export const Header = ({children, spans}) => {
    let spansToRender;
    if (spans) spansToRender = spans.map((span, elementIndex) => <summary key={elementIndex}>{span}</summary>)
    return (
        <header id='pageHeader'>
            <h1>{children}</h1>
            {spansToRender ? spansToRender : null}
        </header>
    )
}