import React from 'react';
import styles from './HomeContainer.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function HomeContainer() {

    const container = (
        <div className='container'>
            <Link to="/craft">
                <button> get</button>
            </Link>
        </div>
    )


  return (
    container
  )
}

export default HomeContainer