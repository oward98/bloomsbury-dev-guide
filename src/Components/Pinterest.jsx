import React from 'react';
import { ImageMasonry } from './ImageMasonry/ImageMasonry';

const terraceImages = [
    {
        url: "https://i.pinimg.com/originals/90/16/18/9016184bf27ad560582fb1fc422a8b42.jpg",
        alt: "",
        caption: "Museum Street"
    },
    {
        url: "https://i.pinimg.com/originals/a0/20/f6/a020f68132c3f75341ad88e90fcb79f6.jpg",
        alt: "",
        caption: "Great Russell Street"
    },
    {
        url: "https://i.pinimg.com/originals/f0/28/62/f028620cbfba62ee15198f6ab2c022c0.jpg",
        alt: "",
        caption: "Willoughby Street"
    },
    {
        url: "https://i.pinimg.com/originals/c7/29/86/c729867dc1638ca89e92da8ffd056b1e.jpg",
        alt: "",
        caption: "Coptic Street"
    },
    {
        url: "https://i.pinimg.com/originals/d0/a3/ae/d0a3aeac45726cd843b7429726fba9ad.jpg",
        alt: "",
        caption: "Gilbert Place"
    },
    {
        url: "https://i.pinimg.com/originals/d7/f3/74/d7f374e978779caceb0cdd3bffb28e0a.jpg",
        alt: "",
        caption: "Gilbert Place"
    },
    {
        url: "https://i.pinimg.com/originals/60/d9/5f/60d95f095619cb3d1ba45eb88570f445.jpg",
        alt: "",
        caption: "Doughty Street"
    },
    {
        url: "https://i.pinimg.com/originals/a6/54/2c/a6542cdf72ee105fea3c0a605dbd8d23.jpg",
        alt: "",
        caption: "Bloomsbury Street"
    },
    {
        url: "https://i.pinimg.com/originals/a4/a6/06/a4a60610d379a33f46384fb20a07150a.jpg",
        alt: "",
        caption: "Great Russell Street"
    },
    {
        url: "https://i.pinimg.com/originals/b4/5e/98/b45e981a12769997f9ad50a1a14244d9.jpg",
        alt: "",
        caption: "Southampton Place"
    },
    {
        url: "https://i.pinimg.com/originals/e8/2f/36/e82f3651d3321712c6e669a2d9393fb7.jpg",
        alt: "",
        caption: "Euston Road"
    }
]

const image = [
    {
        url: "/terraces/DSC_0014.jpg",
        alt: "failure",
        caption: "Euston Road"
    }
]

export const Pinterest = () => {
    return (
        <main>
            <ImageMasonry imageObjects={image}/>
        </main>
    )
}