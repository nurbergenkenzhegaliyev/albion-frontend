import React from 'react';
import styles from './Modal.module.scss';
import ResourceTable from '../ResourceTable/ResourceTable';
import ArtefactTable from '../ArtefactTable/ArtefactTable';
import { useState } from 'react';

const Modal = ({active, setActive}) => {

    const [resourcesTabOpen, setResourcesTabOpen] = useState(true);

    return (
        <div className={active ? [`${styles.modal} ${styles.active}`]:styles.modal} onClick={() => setActive(false)}>
            <div className={active ? [`${styles.modalContent} ${styles.active}`]:styles.modalContent} onClick={e => e.stopPropagation()}>
                <div  className={styles.resources}>
                    <h1 onClick={() => setResourcesTabOpen(!resourcesTabOpen)} className={styles.title}>Resources</h1>
                    <div className={`${resourcesTabOpen ? "":styles.closing} ${styles.resourcesTab}`}>
                        <ResourceTable tier="4" />
                        <ResourceTable tier="5" />
                        <ResourceTable tier="6" />
                        <ResourceTable tier="7" />
                        <ResourceTable tier="8" />
                    </div>
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