import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const isCurrentPage = (path, pagename) => {
    if (pagename==='home') {
        return path==='/';
    } else if (pagename==='vernacular' || pagename==='principles' || pagename==='ratings') {
        return path.includes(pagename);
    } else {
        throw new Error(`isCurrentPage passed invalid argument. Must be one of: 'home', 'principles', 'ratings', 'vernacular' `);
    }
}

export const Template = () => {
    const path = useLocation().pathname;
    return (
        <>
            <header id='appHeader'>
                <nav id='mainNav' className='fullWidthNav'>
                    <ul>
                    <li className={isCurrentPage(path, 'home') ? 'selected' : 'unselected'}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={isCurrentPage(path, 'principles') ? 'selected' : 'unselected'}>
                        <Link to='/principles'>Tests</Link>
                    </li>
                    <li className={isCurrentPage(path, 'ratings') ? 'selected' : 'unselected'}>
                        <Link to='/ratings'>Development Ratings</Link>
                    </li>
                    <li className={isCurrentPage(path, 'vernacular') ? 'selected' : 'unselected'}>
                        <Link to='/vernacular'>Vernacular</Link>
                    </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}