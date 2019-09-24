import React from 'react';
import '../App.css';
import Section from "./Section"


const Sections = ({blocks}) => {
  return (
    <div className="sections">
      {blocks.map((block) =>
        <Section key={block.about} block={block} />
      )}
      {blocks.length===0?<span>No results</span>:null}
    </div>
   );
}

export default Sections;
