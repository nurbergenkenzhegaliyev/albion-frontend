import React from 'react';
import styles from './HomeContainer.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function HomeContainer() {

    const container = (
        <div className={styles.container}>
          <div className={styles.wrapper} >
            <button> get</button>
          </div>
        </div>
    )


  return (
    container
  )
}

export default HomeContainer