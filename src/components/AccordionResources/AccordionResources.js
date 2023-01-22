import { useState, memo } from "react";
import PropTypes from "prop-types";
import styles from "./AccordionResources.module.scss";

function AccordionResources({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${styles.wrapper}`}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.accordionContent} aria-expanded={isOpen}>
        {children}
      </div>
    </div>
  );
}

AccordionResources.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default memo(AccordionResources);
