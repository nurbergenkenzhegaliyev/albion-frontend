import styles from './BlogTitle.module.scss';
import { memo } from 'react';

function BlogTitle() {
  return (
    <div className={styles.wrapper}>
        <span> Welocome to the Blog section </span>
    </div>
  )
}

export default memo(BlogTitle)