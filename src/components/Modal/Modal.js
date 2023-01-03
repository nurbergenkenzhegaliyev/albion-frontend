import React from 'react';
import styles from './Modal.module.scss';
import ResourceTable from '../ResourceTable/ResourceTable';
import ArtefactTable from '../ArtefactTable/ArtefactTable';
import { useState } from 'react';
import Accordion from '../Accordion/Accordion';

const Modal = ({active, setActive}) => {

    const [resourcesTabOpen, setResourcesTabOpen] = useState(true);

    return (
        <div className={active ? [`${styles.modal} ${styles.active}`]:styles.modal} onClick={() => setActive(false)}>
            <div className={active ? [`${styles.modalContent} ${styles.active}`]:styles.modalContent} onClick={e => e.stopPropagation()}>
                <div  className={styles.resources}>
                    <Accordion title={"Resources"}>
                        <div className={styles.resourcesTab}>
                            <ResourceTable tier="4" />
                            <ResourceTable tier="5" />
                            <ResourceTable tier="6" />
                            <ResourceTable tier="7" />
                            <ResourceTable tier="8" />
                        </div>
                    </Accordion>
                    {/* <h1 className={styles.title}>Resources</h1> */}
                    
                </div>
                
                <div  className={styles.resources}>
                    <Accordion title={"Atrefacts"}>
                        <ArtefactTable />
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Modal);