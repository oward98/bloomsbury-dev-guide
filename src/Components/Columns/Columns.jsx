import React from 'react';

export const Columns = ({children, columnWidth}) => {
    return (
        <section className='columnsTest' style={{columnWidth: columnWidth}}>
            {children}
        </section>
    )
}