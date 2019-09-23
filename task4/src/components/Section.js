import React, { useState, useEffect } from 'react';
import '../App.css';


const Section = ({block:{name, img, about}}) => {

  const [image, setImg] = useState();
  useEffect(() => {
    import (`../${img}`).then(loadImage=>setImg(loadImage.default))
  }, [img]);

  return (
    <a href="#" className="section">
      <img src={image} alt={img} />
      <h4 dangerouslySetInnerHTML={{ __html:name}}></h4>
      <span dangerouslySetInnerHTML={{ __html:about}}></span>
    </a>
    );
}

export default Section;
