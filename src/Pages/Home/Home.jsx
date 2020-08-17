import React from 'react';
import './Home.css';

export const Home = () => {
    return (
        <main id='home' className='sidesPadded'>
            <header>
                <h1>Home</h1>
                <p>This website is in development. Contact <strong>owenward@outlook</strong> for further details.</p>
            </header>
            <section id='homeSummary'>
                <article>
                    <h2>Tests</h2>
                    <p>We have set a number of simple tests for development proposals. These tests are designed to assess developments and result in a score based on how well they pass (or fail) the tests. Different tests carry different weights, depending upon their relative importance. An algorithm takes these weights into account and gives an overall score, representative of how well a development contributes (or detracts) from the historic environment.</p>
                </article>
                <article>
                    <h2>Development Ratings</h2>
                    <p>We have collected a number of developments throughout the Bloomsbury Conservation Areas and applied our tests to them, giving an overall score. The scores are broken down by test, with photos and descriptions gathered for each development.</p>
                </article>
                <article>
                    <h2>Vernacular</h2>
                    <p>Many of the tests rely upon understanding the 'vernacular' of the Bloomsbury Conservation Areas. While we call this 'vernacular', the reality is that there is great variety in the built form of Bloomsbury and its environs. We are (currently trying) to collect photos to exhibit this extraordinary diversity, to aid developers in passing the developmental tests.</p>
                </article>
            </section>
        </main>
    )
}