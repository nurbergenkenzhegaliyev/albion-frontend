import React from 'react'
import styles from './TierButtonSection.module.scss'
import Button from "../../components/Button/Button.js";

function TierButtonSection() {
  return (
    <>
        <div className={styles.tierButtons}>
          <div className="d-flex">
            <Button bid="4" />
            <Button bid="5" />
            <Button bid="6" />
            <Button bid="7" />
            <Button bid="8" />
          </div>

          <Button bid="create" onClk={() => console.log("create card")} />
        </div>
    </>
  )
}

export default TierButtonSection