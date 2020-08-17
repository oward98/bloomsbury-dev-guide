import React from 'react';
import './ImportanceSidebar.css';

export default () => {
    return (
        <aside id='importanceSidebar'>
            <h2>Importance</h2>
            <section>
                <h3 className='critical'>Critical</h3>
                <p>Development must score well on <strong>all</strong> tests marked as critical to score well overall. They should be viewed as the bare minimum for responsible development.</p>
            </section>
            <section>
                <h3 className='high'>High</h3>
                <p>Good development should aim to score well on all of these tests, but failure to do so on one or two will not necessarily lead to a poor overall score.</p>
            </section>
            <section>
                <h3 className='medium'>Medium</h3>
                <p>Excellent development should aspire to score well on these, but failure to do so will not lead to a poor score, so long as the 'critical' and 'high' importance tests are satisfied.</p>
            </section>
            <section>
                <h3 className='low'>Low</h3>
                <p>These tests do not weigh heavily in the algorithm, but can be viewed as the 'icing' on the cake of excellent development.</p>
            </section>
        </aside>
    )
}