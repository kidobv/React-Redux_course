import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
   const images = props.images.map((image)=>{//the key property is assigned to the root element, if img was wrapped in div the the key property should be assigned in div
    //use responsive container if it's prefered over the ImageCard component approach
    //return <img key={image.id} alt={image.description} src={image.urls.regular}></img> //we can fetch (id,description,urls) directly in the arrow function argument instead of using image 
       return <ImageCard key={image.id} image={image}/>
    })
    return (
        // <div className="responsive-container">
        <div className="image-list">
            {images}
        </div>
    );
}
export default ImageList;