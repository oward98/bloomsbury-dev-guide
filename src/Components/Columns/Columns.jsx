import React from 'react';
import './Columns.css';

export const Columns = ({children, columnWidth}) => {
    return (
        <section className='columns' style={{columnWidth: columnWidth}}>
            {children}
        </section>
    )
}