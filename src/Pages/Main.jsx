import React from 'react';
import { Block } from '../Components/Block/Block';
import { Columns } from '../Components/Columns/Columns';
import { Header } from '../Components/Header/Header';

export const Main = ({ title, blocksPath, folderPath }) => {
    let blocksToRender;
    if (blocksPath) {
        const blockData = require(`../data/${blocksPath}`);
        blocksToRender = blockData.map(blockDatum => {
            const { name, images, slug, rating, summary } = blockDatum;
            const image = images[0];
            const link = slug;
            const options = { rating, summary }
            return <Block title={name} image={image} link={link} options={options} />
    })
    }
    return (
        <main>
            <Header>{title}</Header>
            <Columns columnWidth='300px'>
                {blocksToRender}
            </Columns>
        </main> 
    )
}