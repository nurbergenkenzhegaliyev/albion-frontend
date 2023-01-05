import { memo } from 'react'
import TableInput from '../TableInput/TableInput'
import styles from './JournalTable.module.scss'
// T4_JOURNAL_WARRIOR

function JournalTableRow({title}) {
  return (
    <table className={`${styles.makerTable} ${styles.wrapper}`}>
        <tbody>
            <tr>
                <td>{title} (empty)</td>
                <TableInput uniqueName={"T4_JOURNAL_" + title.toUpperCase()}/>
                <TableInput uniqueName={"T5_JOURNAL_" + title.toUpperCase()}/>
                <TableInput uniqueName={"T6_JOURNAL_" + title.toUpperCase()}/>
                <TableInput uniqueName={"T7_JOURNAL_" + title.toUpperCase()}/>
                <TableInput uniqueName={"T8_JOURNAL_" + title.toUpperCase()}/>
            </tr>
            <tr>
                <td>{title} (full)</td>
                <TableInput uniqueName={"T4_JOURNAL_" + title.toUpperCase() + "_FILLED"}/>
                <TableInput uniqueName={"T5_JOURNAL_" + title.toUpperCase() + "_FILLED"}/>
                <TableInput uniqueName={"T6_JOURNAL_" + title.toUpperCase() + "_FILLED"}/>
                <TableInput uniqueName={"T7_JOURNAL_" + title.toUpperCase() + "_FILLED"}/>
                <TableInput uniqueName={"T8_JOURNAL_" + title.toUpperCase() + "_FILLED"}/>
            </tr>
        </tbody>
    </table>
  )
}

export default memo(JournalTableRow)