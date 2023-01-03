import React, { useState } from 'react';
import styles from './Accordion.module.scss';

function Accordion({children, title, length}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${styles.wrapper}`}>
        <div className={styles.accordionTitle} onClick={() => setIsOpen(prev => !prev)}>
            <span className={styles.title}>{title}</span>
            <span className={styles.length}>{(length!=0) && `Item amount: ${length}`}</span>

        </div>
        <div className={styles.accordionContent} aria-expanded={isOpen}>
            {children}
        </div>
    </div>
  )
}

export default React.memo(Accordion)