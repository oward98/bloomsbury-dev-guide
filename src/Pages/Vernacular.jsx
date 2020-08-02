import React from 'react';
import { Main } from './Main';
import { SideNav } from './SideNav';
import { Routes } from './Routes';
 
const vernacularRoutesData = {
    "Materials": [
        {
            title: 'Brick',
            link: '/vernacular/brick',
            component: <Main />,
            props: {
                title: 'Brick'
            }
        },
        {
            title: 'Portland Stone',
            link: '/vernacular/portland-stone',
            component: <Main />,
            props: {
                title: 'Portland Stone'
            }
        },
        {
            title: 'Stucco',
            link: '/vernacular/stucco',
            component: <Main />,
            props: {
                title: 'Stucco'
            }
        },
        {
            title: 'Glass',
            link: '/vernacular/glass',
            component: <Main />,
            props: {
                title: 'Glass'
            }
        },
        {
            title: 'Timber',
            link: '/vernacular/timber',
            component: <Main />,
            props: {
                title: 'Timber'
            }
        },
        {   title: 'Slate',
            link: '/vernacular/slate',
            component: <Main />,
            props: {
                title: 'Slate'
            }
        }
    ],
    "Form": [
        {
            title: 'Terrace',
            link: '/vernacular/terrace',
            component: <Main />,
            props: {
                title: 'Terrace'
            }
        },
        {
            title: 'Mansion Block',
            link: '/vernacular/mansion-block',
            component: <Main />,
            props: {
                title: 'Mansion Block'
            }
        },
        {
            title: 'Institutional',
            link: '/vernacular/institutional',
            component: <Main />,
            props: {
                title: 'Institutional'
            }
        },
        {
            title: 'Commercial',
            link: '/vernacular/commercial',
            component: <Main />,
            props: {
                title: 'Commercial'
            }
        },
        {
            title: 'Legal',
            link: '/vernacular/legal',
            component: <Main />,
            props: {
                title: 'Legal'
            }
        },
        {
            title: 'Ecclesiastical',
            link: '/vernacular/ecclesiastical',
            component: <Main />,
            props: {
                title: 'Ecclesiastical'
            }
        },
        {
            title: 'Mews',
            link: '/vernacular/mews',
            component: <Main />,
            props: {
                title: 'Mews'
            }
        },
        {
            title: 'Curiosities',
            link: '/vernacular/building-curiosities',
            component: <Main />,
            props: {
                title: 'Curiosities'
            }
        },
    ],
    "Style": [
        {
            title: 'Classical Architecture',
            link: '/vernacular/classical',
            component: <Main />,
            props: {
                title: 'Classical'
            }
        },
        {
            title: 'Gothic Revival',
            link: '/vernacular/gothic',
            component: <Main />,
            props: {
                title: 'Gothic Revival'
            }
        },
        {
            title: 'Romanesque Revival',
            link: '/vernacular/romanesque',
            component: <Main />,
            props: {
                title: 'Romanesque Revival'
            }
        },
        {
            title: 'Arts and Crafts',
            link: '/vernacular/arts-and-crafts',
            component: <Main />,
            props: {
                title: 'Arts and Crafts'
            }
        },
        {
            title: 'Byzantine Revival',
            link: '/vernacular/byzantine',
            component: <Main />,
            props: {
                title: 'Byzantine Revival'
            }
        },
        {
            title: 'Art Deco',
            link: '/vernacular/art-deco',
            component: <Main />,
            props: {
                title: 'Art Deco'
            }
        },
        {
            title: 'Modern',
            link: '/vernacular/modern',
            component: <Main />,
            props: {
                title: 'Modern'
            }
        }
    ],
    "Relationship to Street": [
        {
            title: 'Basement Levels',
            link: '/vernacular/basmements',
            component: <Main />,
            props: {
                title: 'Basement Levels'
            }
        },
        {
            title: 'Railings',
            link: '/vernacular/railings',
            component: <Main />,
            props: {
                title: 'Railings'
            }
        },
        {
            title: 'Rustication',
            link: '/vernacular/rustication',
            component: <Main />,
            props: {
                title: 'Rustication'
            }
        },
        {
            title: 'Shopfronts',
            link: '/vernacular/shopfronts',
            component: <Main />,
            props: {
                title: 'Shopfronts'
            }
        }
    ],
    "Roofscape": [
        {
            title: 'Butterfly Roofs',
            link: '/vernacular/butterfly-roofs',
            component: <Main />,
            props: {
                title: 'Butterfly Roofs'
            }
        },
        {
            title: 'Chimney Stacks',
            link: '/vernacular/chimney-stacks',
            component: <Main />,
            props: {
                title: 'Chimney Stacks'
            }
        },
        {
            title: 'Expressed Party Walls',
            link: '/vernacular/expressed-party-walls',
            component: <Main />,
            props: {
                title: 'Expressed Party Walls'
            }
        },
        {
            title: 'Parapets',
            link: '/vernacular/parapets',
            component: <Main />,
            props: {
                title: 'Parapets'
            }
        },
        {
            title: 'Turrets',
            link: '/vernacular/turrets',
            component: <Main />,
            props: {
                title: 'Turrets'
            }
        },
        {
            title: 'Dormers',
            link: '/vernacular/dormers',
            component: <Main />,
            props: {
                title: 'Dormers'
            }
        }
    ],
    "Features": [
        {
            title: 'Classical Orders',
            link: '/vernacular/classical-orders',
            component: <Main />,
            props: {
                title: 'Classical Orders'
            }
        },
        {
            title: 'Corner Elements',
            link: '/vernacular/corner-elements',
            component: <Main />,
            props: {
                title: 'Corner Elements'
            }
        },
        {
            title: 'Entrances',
            link: '/vernacular/entrances',
            component: <Main />,
            props: {
                title: 'Entrances'
            }
        },
        {
            title: 'Fanlights',
            link: '/vernacular/fanlights',
            component: <Main />,
            props: {
                title: 'Fanlights'
            }
        },
        {
            title: 'Porticos',
            link: '/vernacular/porticos',
            component: <Main />,
            props: {
                title: 'Porticos'
            }
        },
        {
            title: 'Clocks',
            link: '/vernacular/clocks',
            component: <Main />,
            props: {
                title: 'Clocks'
            }
        },
        {
            title: 'Signs',
            link: '/vernacular/signs',
            component: <Main />,
            props: {
                title: 'Signs'
            }
        }
    ],
    "Street Environment": [
        {
            title: 'Squares and Gardens',
            link: '/vernacular/squares-and-gardens',
            component: <Main />,
            props: {
                title: 'Squares and Gardens'
            }
        },
        {
            title: 'Paving',
            link: '/vernacular/paving',
            component: <Main />,
            props: {
                title: 'Paving'
            }
        },
        {
            title: 'Setts',
            link: '/vernacular/setts',
            component: <Main />,
            props: {
                title: 'Setts'
            }
        },
        {
            title: 'Kerbstones',
            link: '/vernacular/kerbstones',
            component: <Main />,
            props: {
                title: 'Kerbstones'
            }
        },
        {
            title: 'Lampposts',
            link: '/vernacular/lampposts',
            component: <Main />,
            props: {
                title: 'Lampposts'
            }
        },
        {
            title: 'Railings',
            link: '/vernacular/railings',
            component: <Main />,
            props: {
                title: 'Railings'
            }
        },
        {
            title: 'Benches',
            link: '/vernacular/benches',
            component: <Main />,
            props: {
                title: 'Benches'
            }
        },
        {
            title: 'Postboxes',
            link: '/vernacular/postboxes',
            component: <Main />,
            props: {
                title: 'Postboxes'
            }
        },
        {   
            title: 'Wildlife',
            link: '/vernacular/wildlife',
            component: <Main />,
            props: {
                title: 'Wildlife'
            }
        },
        {
            title: 'Curiosities',
            link: '/vernacular/curiosities',
            component: <Main />,
            props: {
                title: 'Curiosities'
            }
        }
    ]   
}

export const Vernacular = () => {
    return (
        <div id='mainDiv'>
            <SideNav heading='Vernacular' routesData={vernacularRoutesData}/>
            <Routes routesData={vernacularRoutesData}/>  
        </div>  
    )
}