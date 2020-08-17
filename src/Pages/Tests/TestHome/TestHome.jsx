import React from 'react';
import { Header } from '../../../Components/Header/Header';
import './TestHome.css';

export default () => {
    return (
        <main id='testHome' className='sidesPadded fillSpace'>
            <div>
                <Header>Tests</Header>
                <section>
                    <article>
                        <p>We rate development on each of the tests contained in this section. Each of these tests holds different weight. We have created an algorithm which takes these different weights into account, to give every development an overall score.</p>
                        <p>The tests are to the left, while an explanation of the different weights is to the right.</p>
                    </article>
                </section>
            </div>
        </main>
    )
}