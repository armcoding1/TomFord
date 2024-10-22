import React, { useState, FC } from "react";
import "./Accordion.css";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordion: FC<any> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item: any, index: any) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
          >
            {item.title}
            {activeIndex === index ? <FiMinus size="24px" /> : <GoPlus size="24px" />}
          </div>
          <div className={`accordion-body ${activeIndex === index ? "open" : ""}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;