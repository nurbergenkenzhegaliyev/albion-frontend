import styles from './JournalTable.module.scss'

function JournalTableRow({title}) {
  return (
    
    <table className={`${styles.makerTable} ${styles.wrapper}`}>
        <tbody>
            <tr>
                <td>{title} (empty)</td>
                <td>Tier 4</td>
                <td>Tier 5</td>
                <td>Tier 6</td>
                <td>Tier 7</td>
                <td>Tier 8</td>
            </tr>
            <tr>
                <td>{title} (full)</td>
                <td>Tier 4</td>
                <td>Tier 5</td>
                <td>Tier 6</td>
                <td>Tier 7</td>
                <td>Tier 8</td>
            </tr>
        </tbody>
    </table>
  )
}

export default JournalTableRow