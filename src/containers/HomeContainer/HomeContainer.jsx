import React from 'react';
import styles from './HomeContainer.module.scss';

function HomeContainer() {

    const container = 
        <div className={styles.container}>
          <div className={styles.wrapper} >
            <button> get</button>
          </div>
        </div>
    


  return (
    container
  )
}

export default HomeContainer