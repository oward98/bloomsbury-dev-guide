import React from 'react';
import { Columns } from '../Columns/Columns';
import { Header } from '../Header/Header';
import { Masonry } from '../Masonry/Masonry';
import './Main.css';

export const Main = React.memo(({ title, images }) => {
    //main images should just take a load of images really.
    let blocksToRender;

    return (
        <main className='fillSpace'>
            {title && <Header>{title}</Header>}
            <Columns columnWidth='300px'>
                {blocksToRender}
            </Columns>
            <Masonry>
                {images}
            </Masonry>
        </main> 
    )
})