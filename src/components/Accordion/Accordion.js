import React, { useState } from 'react';
import styles from './Accordion.module.scss';

function Accordion({children, title, length, tax, setTax}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${styles.wrapper}`}>
        <div className={styles.accordionTitle} onClick={() => setIsOpen(prev => !prev)}>
            <div className={styles.titleBox}>
              <span className={styles.title}>{title}</span>
              <span className={styles.fee}>Fee:</span>
              <input type="text" value={tax} onChange={e=>setTax(e.target.value)} onClick={e => e.stopPropagation()} />
            </div>
            <span className={styles.length}>{(length!==0 && length!==undefined) && `Item amount: ${length}`}</span>

        </div>
        <div className={styles.accordionContent} aria-expanded={isOpen}>
            {children}
        </div>
    </div>
  )
}

export default React.memo(Accordion)