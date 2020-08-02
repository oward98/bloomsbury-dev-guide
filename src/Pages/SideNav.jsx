import React from 'react';
import { Link } from 'react-router-dom';

export const SideNav = ({heading, routesData}) => {
    const subheadings = Object.keys(routesData);
    const makeLink = linkData => <Link to={linkData.link}>{linkData.title}</Link>
    return (
        <nav className='sideNav'>
            <header>
                <h1>{heading}</h1>
            </header>
            <ul id='mainSideList'>
                {subheadings.map(subheading => {
                    return (
                        <li>
                            <h2>{subheading}</h2>
                            <ul className='sideMinorList'>
                                {routesData[subheading].map(linkData => <li>{makeLink(linkData)}</li>)}
                            </ul>
                        </li>  
                    )
                })}
            </ul>
        </nav>
    )
}