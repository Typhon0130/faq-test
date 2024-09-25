import React from "react";

import Accordion from "../Accordion/Accordion";

import { AccordionItem as FAQItem } from "../../types/accordionTypes";

import styles from "./FAQ.module.css";

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <span>Questions?</span>
        <span>We have answers.</span>
      </div>
      <div className={styles.faqContent}>
        <div>
          {items.map((item, index) => (
            <Accordion
              key={`FAQ-${index}`}
              title={item.title}
              desc={item.desc}
              bgColor={item.bgColor}
            />
          ))}
        </div>
        <button className={styles.faqBtn}>Shop Now</button>
      </div>
    </div>
  );
};

export default FAQ;
