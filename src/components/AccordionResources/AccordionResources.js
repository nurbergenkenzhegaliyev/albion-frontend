import { useState, memo } from 'react';
import styles from './AccordionResources.module.scss';

function AccordionResources({children, title}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${styles.wrapper}`}>
        <div className={styles.accordionTitle} onClick={() => setIsOpen(prev => !prev)}>
            <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.accordionContent} aria-expanded={isOpen}>
            {children}
        </div>
    </div>
  )
}

export default memo(AccordionResources)