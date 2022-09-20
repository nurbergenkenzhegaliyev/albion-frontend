import React from 'react';
import styles from './Modal.module.scss';
import ResourceTable from '../ResourceTable/ResourceTable';


const Modal = ({active, setActive}) => {
    return (
        <div className={active ? [`${styles.modal} ${styles.active}`]:styles.modal} onClick={() => setActive(false)}>
            <div className={active ? [`${styles.modalContent} ${styles.active}`]:styles.modalContent} onClick={e => e.stopPropagation()}>
                <div  className={styles.resources}>
                    <h1>Resources</h1>
                    <ResourceTable tier="4" />
                    {/* <ResourceTable tier="5" /> */}
                </div>
            </div>
        </div>
    )
}

export default Modal;