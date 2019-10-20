import React from "react";
import "../App.css";
import { Section } from "./Section";

export const Sections = ({ blocks }) => (
  <div>
    <h1>Main Projects</h1>
    <span className="about">
      From configuration to security, web apps to big data – whatever the
      infrastructure needs of your application may be, there is a{" "}
      <strong>Spring Project</strong> to help you build it. Start small and use
      just what you need – <strong>Spring is modular by design</strong>.
    </span>
    <div className="sections">
      {blocks.map(block => (
        <Section key={block.about} block={block} />
        ))}
      {blocks.length === 0 ? <span>No results</span> : null}
    </div>
  </div>
);
