import React from 'react';
import styles from './Modal.module.scss';
import ResourceTable from '../ResourceTable/ResourceTable';
import ArtefactTable from '../ArtefactTable/ArtefactTable';
import AccordionResources from '../AccordionResources/AccordionResources';
import JournalTable from '../JournalTable/JournalTable';

const Modal = ({active, setActive}) => {

    return (
        <div className={active ? [`${styles.modal} ${styles.active}`]:styles.modal} onClick={() => setActive(false)}>
            <div className={active ? [`${styles.modalContent} ${styles.active}`]:styles.modalContent} onClick={e => e.stopPropagation()}>
                <div  className={styles.resources}>
                    <AccordionResources title={"Resources"}>
                        <ResourceTable tier="4" />
                        <ResourceTable tier="5" />
                        <ResourceTable tier="6" />
                        <ResourceTable tier="7" />
                        <ResourceTable tier="8" />
                    </AccordionResources>

                    <AccordionResources title={"Atrefacts"}>
                        <ArtefactTable />
                    </AccordionResources>

                    
                    <AccordionResources title={"Journals"}>
                        <JournalTable />
                    </AccordionResources>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Modal);