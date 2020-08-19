import React from 'react';
import './SideNav.css';
import { Link, useLocation } from 'react-router-dom';

export const SideNav = ({ routesData }) => {
    const path = useLocation().pathname;
    const decideClassName = linkData => path.includes(linkData.link) ? "selected" : "unselected";

    const makeLink = linkData => <Link to={linkData.link}>{linkData.title}</Link>
    return (
        <nav className='sideNav sidebar'>
            <ul id='mainSideList'>
                {routesData.map(topLevelLink => {
                    return (
                        <li className={`${decideClassName(topLevelLink)}  topLevelList`}>
                            <h2 className={decideClassName(topLevelLink)}>{makeLink(topLevelLink)}</h2>
                            {
                                topLevelLink.subtitles
                                ?
                                <ul className='sideMinorList'>
                                    {topLevelLink.subtitles.map(lowerLevelLink => <li ><h3 className={decideClassName(lowerLevelLink)}>{makeLink(lowerLevelLink)}</h3></li>)}
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

/*
const sideNavData = [
    {
        title,
        link,
        subtitles: [
            {
                title,
                link
            }
        }
        ]
    },
    {

    },
]
*/