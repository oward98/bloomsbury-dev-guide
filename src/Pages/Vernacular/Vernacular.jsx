import React from 'react';
import { Main } from '../Main/Main';
import { SideNav } from '../../Components/SideNav/SideNav';
import { Routes } from '../../Routes/Routes';
const vernacularRoutesData = [
    {
        title: 'Materials',
        link: '/vernacular/materials',
        component: <Main />,
        props: {
            title: 'Materials'
        },
        subtitles: [
            {
                title: 'Brick',
                link: '/vernacular/materials/brick',
                component: <Main />,
                props: {
                    title: 'Brick'
                }
            },
            {
                title: 'Portland Stone',
                link: '/vernacular/materials/portland-stone',
                component: <Main />,
                props: {
                    title: 'Portland Stone'
                }
            },
            {
                title: 'Stucco',
                link: '/vernacular/materials/stucco',
                component: <Main />,
                props: {
                    title: 'Stucco'
                }
            },
            {
                title: 'Glass',
                link: '/vernacular/materials/glass',
                component: <Main />,
                props: {
                    title: 'Glass'
                }
            },
            {
                title: 'Timber',
                link: '/vernacular/materials/timber',
                component: <Main />,
                props: {
                    title: 'Timber'
                }
            },
            {   title: 'Slate',
                link: '/vernacular/materials/slate',
                component: <Main />,
                props: {
                    title: 'Slate'
                }
            }
        ]
    },
    {
        title: "Building Typology",
        link: '/vernacular/building-typology',
        component: <Main />,
        props: {
            title: 'Building Typology'
        },
        subtitles: [
            {
                title: 'Terrace',
                link: '/vernacular/building-typology/terrace',
                component: <Main />,
                props: {
                    title: 'Terrace',
                    blocksPath: 'vernacular/terraces.json'
                }
            },
            {
                title: 'Mansion Block',
                link: '/vernacular/building-typology/mansion-block',
                component: <Main />,
                props: {
                    title: 'Mansion Block'
                }
            },
            {
                title: 'Institutional',
                link: '/vernacular/building-typology/institutional',
                component: <Main />,
                props: {
                    title: 'Institutional'
                }
            },
            {
                title: 'Commercial',
                link: '/vernacular/building-typology/commercial',
                component: <Main />,
                props: {
                    title: 'Commercial'
                }
            },
            {
                title: 'Legal',
                link: '/vernacular/building-typology/legal',
                component: <Main />,
                props: {
                    title: 'Legal'
                }
            },
            {
                title: 'Ecclesiastical',
                link: '/vernacular/building-typology/ecclesiastical',
                component: <Main />,
                props: {
                    title: 'Ecclesiastical'
                }
            },
            {
                title: 'Mews',
                link: '/vernacular/building-typology/mews',
                component: <Main />,
                props: {
                    title: 'Mews'
                }
            },
            {
                title: 'Curiosities',
                link: '/vernacular/building-typology/building-curiosities',
                component: <Main />,
                props: {
                    title: 'Curiosities'
                }
            },
        ]
    },
    {
        title: "Style",
        link: '/vernacular/style',
        component: <Main />,
        props: {
            title: "Style"
        },
        subtitles: [
            {
                title: 'Classical Architecture',
                link: '/vernacular/style/classical',
                component: <Main />,
                props: {
                    title: 'Classical'
                }
            },
            {
                title: 'Gothic Revival',
                link: '/vernacular/style/gothic',
                component: <Main />,
                props: {
                    title: 'Gothic Revival'
                }
            },
            {
                title: 'Romanesque Revival',
                link: '/vernacular/style/romanesque',
                component: <Main />,
                props: {
                    title: 'Romanesque Revival'
                }
            },
            {
                title: 'Arts and Crafts',
                link: '/vernacular/style/arts-and-crafts',
                component: <Main />,
                props: {
                    title: 'Arts and Crafts'
                }
            },
            {
                title: 'Byzantine Revival',
                link: '/vernacular/style/byzantine',
                component: <Main />,
                props: {
                    title: 'Byzantine Revival'
                }
            },
            {
                title: 'Art Deco',
                link: '/vernacular/style/art-deco',
                component: <Main />,
                props: {
                    title: 'Art Deco'
                }
            },
            {
                title: 'Modern',
                link: '/vernacular/style/modern',
                component: <Main />,
                props: {
                    title: 'Modern'
                }
            }
        ]
    },
    {
        title: "Relationship to Street",
        link: "/vernacular/relationship-to-street",
        component: <Main />,
        props: {
            title: 'Relationship to Street'
        },
        subtitles: [
            {
                title: 'Basement Levels',
                link: '/vernacular/relationship-to-street/basmements',
                component: <Main />,
                props: {
                    title: 'Basement Levels'
                }
            },
            {
                title: 'Railings',
                link: '/vernacular/relationship-to-street/railings',
                component: <Main />,
                props: {
                    title: 'Railings'
                }
            },
            {
                title: 'Rustication',
                link: '/vernacular/relationship-to-street/rustication',
                component: <Main />,
                props: {
                    title: 'Rustication'
                }
            },
            {
                title: 'Shopfronts',
                link: '/vernacular/relationship-to-street/shopfronts',
                component: <Main />,
                props: {
                    title: 'Shopfronts'
                }
            }
        ]
    },
    {
        title: "Roofscape",
        link: "/vernacular/roofscape",
        component: <Main />,
        props: {
            title: "Roofscape"
        },
        subtitles: [
            {
                title: 'Butterfly Roofs',
                link: '/vernacular/roofscape/butterfly-roofs',
                component: <Main />,
                props: {
                    title: 'Butterfly Roofs'
                }
            },
            {
                title: 'Chimney Stacks',
                link: '/vernacular/roofscape/chimney-stacks',
                component: <Main />,
                props: {
                    title: 'Chimney Stacks'
                }
            },
            {
                title: 'Expressed Party Walls',
                link: '/vernacular/roofscape/expressed-party-walls',
                component: <Main />,
                props: {
                    title: 'Expressed Party Walls'
                }
            },
            {
                title: 'Parapets',
                link: '/vernacular/roofscape/parapets',
                component: <Main />,
                props: {
                    title: 'Parapets'
                }
            },
            {
                title: 'Turrets',
                link: '/vernacular/roofscape/turrets',
                component: <Main />,
                props: {
                    title: 'Turrets'
                }
            },
            {
                title: 'Dormers',
                link: '/vernacular/roofscape/dormers',
                component: <Main />,
                props: {
                    title: 'Dormers'
                }
            }
        ]
    },
    {
        title: "Features",
        link: '/vernacular/features',
        component: <Main />,
        props: {
            title: "Features"
        },
        subtitles: [
            {
                title: 'Classical Orders',
                link: '/vernacular/features/classical-orders',
                component: <Main />,
                props: {
                    title: 'Classical Orders'
                }
            },
            {
                title: 'Corner Elements',
                link: '/vernacular/features/corner-elements',
                component: <Main />,
                props: {
                    title: 'Corner Elements'
                }
            },
            {
                title: 'Entrances',
                link: '/vernacular/features/entrances',
                component: <Main />,
                props: {
                    title: 'Entrances'
                }
            },
            {
                title: 'Fanlights',
                link: '/vernacular/features/fanlights',
                component: <Main />,
                props: {
                    title: 'Fanlights'
                }
            },
            {
                title: 'Porticos',
                link: '/vernacular/features/porticos',
                component: <Main />,
                props: {
                    title: 'Porticos'
                }
            },
            {
                title: 'Clocks',
                link: '/vernacular/features/clocks',
                component: <Main />,
                props: {
                    title: 'Clocks'
                }
            },
            {
                title: 'Signs',
                link: '/vernacular/features/signs',
                component: <Main />,
                props: {
                    title: 'Signs'
                }
            }
        ]
    },
    {
        title: "Street Environment",
        link: '/vernacular/street-environment',
        component: <Main />,
        props: {
            title: "Street Environment"
        },
        subtitles: [
            {
                title: 'Squares and Gardens',
                link: '/vernacular/street-environment/squares-and-gardens',
                component: <Main />,
                props: {
                    title: 'Squares and Gardens'
                }
            },
            {
                title: 'Paving',
                link: '/vernacular/street-environment/paving',
                component: <Main />,
                props: {
                    title: 'Paving'
                }
            },
            {
                title: 'Setts',
                link: '/vernacular/street-environment/setts',
                component: <Main />,
                props: {
                    title: 'Setts'
                }
            },
            {
                title: 'Kerbstones',
                link: '/vernacular/street-environment/kerbstones',
                component: <Main />,
                props: {
                    title: 'Kerbstones'
                }
            },
            {
                title: 'Lampposts',
                link: '/vernacular/street-environment/lampposts',
                component: <Main />,
                props: {
                    title: 'Lampposts'
                }
            },
            {
                title: 'Railings',
                link: '/vernacular/street-environment/railings',
                component: <Main />,
                props: {
                    title: 'Railings'
                }
            },
            {
                title: 'Benches',
                link: '/vernacular/street-environment/benches',
                component: <Main />,
                props: {
                    title: 'Benches'
                }
            },
            {
                title: 'Postboxes',
                link: '/vernacular/street-environment/postboxes',
                component: <Main />,
                props: {
                    title: 'Postboxes'
                }
            },
            {   
                title: 'Wildlife',
                link: '/vernacular/street-environment/wildlife',
                component: <Main />,
                props: {
                    title: 'Wildlife'
                }
            },
            {
                title: 'Curiosities',
                link: '/vernacular/street-environment/curiosities',
                component: <Main />,
                props: {
                    title: 'Curiosities'
                }
            }
        ]
    }
]

export const Vernacular = () => {
    return (
        <div id='mainDiv' className='sidesPadded'>
            <SideNav heading='Vernacular' routesData={vernacularRoutesData}/>
            <Routes routesData={vernacularRoutesData}/>
        </div>  
    )
}