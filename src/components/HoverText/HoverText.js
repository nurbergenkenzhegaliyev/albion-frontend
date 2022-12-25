import React from 'react';
import styles from './HoverText.module.scss';

function HoverText({children}) {
  return (
    <div className={styles.hover}>{children}</div>
  )
}

export default HoverText