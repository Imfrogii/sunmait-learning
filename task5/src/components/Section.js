import React, { useState, useEffect } from 'react';
import '../App.css';


export const Section = ({block:{name, img, about}}) => {

  const [image, setImg] = useState();
  useEffect(() => {
    import (`../${img}`).then(loadImage=>setImg(loadImage.default))
  }, [img]);

  return (
    <a href="#" className="section">
      <img src={image} alt={img} />
      <h4>{name}</h4>
      <span>{about}</span>
    </a>
    );
}