import React from 'react';
import './SideNav.css';
import { Link, useLocation } from 'react-router-dom';

export const SideNav = ( {pages} ) => {
    const path = useLocation().pathname;

    const pageIsActive = page => path.includes(page.slug);
    const decidePageClassName = page => pageIsActive(page) ? "selected" : "unselected";
    const makeLink = page => <Link to={page.link}>{page.name}</Link>;

    return (
        <nav className='sideNav sidebar'>
            <ul id='mainSideList'>
                {pages.map((page, index) => {
                    return (
                        <li key={index} className={`${decidePageClassName(page)}  topLevelList`}>
                            <h2 className={decidePageClassName(page)}>{makeLink(page)}</h2>
                            {
                                page.children
                                ?
                                <ul className='sideMinorList'>
                                    {page.children.map((childPage, index) => <li key={index}><h3 className={decidePageClassName(childPage)}>{makeLink(childPage)}</h3></li>)}
                                </ul>
                                :
                                null    
                            }
                        </li>  
                    )
                })}
            </ul>
        </nav>
    )
}