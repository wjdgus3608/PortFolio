import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import image1 from './assets/test1.jpg'
import image2 from './assets/hacker.jpg'
import image3 from './assets/hexa2.jpg'
import image4 from './assets/hexa1.jpg'
import image5 from './assets/band1.jpg'
import image6 from './assets/band2.jpg'
import image7 from './assets/band3.jpg'
class Gallery extends React.Component {

    render() {

        const images = [
            {
                original: image1,
                thumbnail: image1,
                description:"(주)아나키 인턴 결과발표"
            },
            {
                original: image2,
                thumbnail: image2,
                description:"학술 동아리 Hacker 활동"
            },
            {
                original: image3,
                thumbnail: image3,
                description:"기타 동아리 HEXA 회장 활동1"
            },
            {
                original: image4,
                thumbnail: image4,
                description:"기타 동아리 HEXA 회장 활동2"
            },
            {
                original: image5,
                thumbnail: image5,
                description:"밴드 동아리 정기공연"
            },
            {
                original: image6,
                thumbnail: image6,
                description:"밴드 동아리 버스킹"
            },
            {
                original: image7,
                thumbnail: image7,
                description:"교내 가요제 출전"
            }
        ]

        return (
            <ImageGallery items={images} />
        );
    }

}

export default Gallery