import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import image1 from './assets/test1.jpg'
import image2 from './assets/test2.jpg'
class Gallery extends React.Component {

    render() {

        const images = [
            {
                original: image1,
                thumbnail: image1,
                description:"bbbbbbbbb"
            },
            {
                original: image2,
                thumbnail: image2,
                description:"aaaaaaa"
            }
        ]

        return (
            <ImageGallery items={images} />
        );
    }

}

export default Gallery