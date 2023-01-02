import React, { useState } from 'react';
import styles from './Accordion.module.scss';

function Accordion({children, title}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${styles.wrapper}`}>
            <div className={styles.accordionTitle} onClick={() => setIsOpen(prev => !prev)}>
                <span>{title}</span>
            </div>
            <div className={styles.accordionContent} aria-expanded={isOpen}>
                {children}
            </div>
        </div>
  )
}

export default Accordion