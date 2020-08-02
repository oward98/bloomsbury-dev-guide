import React from 'react';
import { Block } from '../Components/Block';

export const Main = ({title, text, blocks_path}) => {
    let blocksToRender;
    if (blocks_path) {
        const blockData = require(`./data/${blocks_path}`);
        blocksToRender = blockData.map(blockDatum => <Block blockData={blockDatum}/>)
    }
    return (
        <main>
            <h1>{title}</h1>
            <section className='blocks'>
                <div className='columns'>
                    {blocksToRender}
                </div>
            </section>
        </main> 
    )
}