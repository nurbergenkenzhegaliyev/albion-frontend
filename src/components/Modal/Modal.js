import React from 'react';
import styles from './Modal.module.scss';
import ResourceTable from '../ResourceTable/ResourceTable';
import ArtefactTable from '../ArtefactTable/ArtefactTable';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? [`${styles.modal} ${styles.active}`]:styles.modal} onClick={() => setActive(false)}>
            <div className={active ? [`${styles.modalContent} ${styles.active}`]:styles.modalContent} onClick={e => e.stopPropagation()}>
                <div  className={styles.resources}>
                    <h1>Resources</h1>
                    <ResourceTable tier="4" />
                    <ResourceTable tier="5" />
                    <ResourceTable tier="6" />
                    <ResourceTable tier="7" />
                    <ResourceTable tier="8" />
                </div>
                
                <div  className={styles.resources}>
                    <h1>Atrefacts</h1>
                    <ArtefactTable />
                </div>
            </div>
        </div>
    )
}

export default Modal;