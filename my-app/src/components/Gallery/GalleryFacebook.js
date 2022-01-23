import './GalleryFacebook.scss';
import { IMuiFbPhotoGridImage, MuiFbPhotoGrid } from 'mui-fb-photo-grid';
import React from 'react';

function GalleryFacebook(props) {


    const IMAGES:IMuiFbPhotoGridImage[] = [
        {
        title: '...', // require
        img: "https://i.ibb.co/rwcksF8/ease-640.jpg" , // require
        imgThumbnail: "https://i.ibb.co/rwcksF8/ease-640.jpg"  , // optional
      },
      {
        title: '...',
        img:  "https://i.ibb.co/D511vSJ/yoga-640.jpg" ,
        imgThumbnail: "https://i.ibb.co/D511vSJ/yoga-640.jpg" ,
      },
      {
        title: '...',
        img: "https://i.ibb.co/DC19NB6/karate-640.jpg",
        imgThumbnail: "https://i.ibb.co/DC19NB6/karate-640.jpg",
      },
      {
        title: '...',
        img: "https://i.ibb.co/KF1pVqL/woman-1280.jpg",
        imgThumbnail: "https://i.ibb.co/KF1pVqL/woman-1280.jpg",
      },
      {
        title: '...',
        img: "https://i.ibb.co/PMyTTjc/women-640.jpg" ,
        imgThumbnail: "https://i.ibb.co/PMyTTjc/women-640.jpg" ,
      },
      {
        title: '...',
        img: "https://i.ibb.co/syk2hNW/yoga-640.jpg"  ,
        imgThumbnail: "https://i.ibb.co/syk2hNW/yoga-640.jpg"  ,
      },
      {
        title: '...',
        img: "https://i.ibb.co/k44hFB6/man-1280.jpg"  ,
        imgThumbnail: "https://i.ibb.co/k44hFB6/man-1280.jpg"  ,
      }
    ]
    return (
        <div>
                <MuiFbPhotoGrid
                images={IMAGES} // require
                reactModalStyle={{overlay: { zIndex: 2000 }}}
                />
        </div>
    );
}

export default GalleryFacebook;
