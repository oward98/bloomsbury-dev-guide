import React from 'react';
import { Block } from '../Components/Block/Block';
import { Columns } from '../Components/Columns/Columns';
import { Header } from '../Components/Header/Header';

export const Main = ({title, blocks_path}) => {
    let blocksToRender;
    if (blocks_path) {
        const blockData = require(`./data/${blocks_path}`);
        blocksToRender = blockData.map(blockDatum => <Block blockData={blockDatum}/>)
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