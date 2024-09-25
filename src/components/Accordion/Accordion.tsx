import React from "react";

import { AccordionItem as AccordionProps } from "../../types/accordionTypes";

import styles from "./Accortion.module.css";

const Accordion: React.FC<AccordionProps> = ({ title, desc, bgColor }) => {
  return (
    <details className={styles.accordion} style={{ background: `${bgColor}` }}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.content}>
        <p>{desc}</p>
      </div>
    </details>
  );
};

export default Accordion;
