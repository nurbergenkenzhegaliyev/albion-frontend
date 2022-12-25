import React from "react";
import { useState } from "react";
import styles from "./CityBonus.module.scss";

function CityBonus() {
  const [havePremium, setHavePremium] = useState(false);
  const [useFocus, setUseFocus] = useState(false);
  const [city, setCity] = useState("Lymhurst");

  return (
    <div className={styles.main}>
      <div className={styles.container}>

        <div className={styles.sameBlock}>
          <input
            className="check"
            type="checkbox"
            id="premium"
            name="premium2"
            value="premium"
            checked={havePremium}
            onChange={() => setHavePremium(!havePremium)}
          />
          <label className="checkLabel" htmlFor="premium">Have premium</label>
        </div>

        <div className={styles.sameBlock}>
          <input
              className="check"
              type="checkbox"
              id="focus"
              name="focus"
              value="focus"
              checked={useFocus}
              onChange={() => setUseFocus(!useFocus)}
            />
          <label className="checkLabel" htmlFor="focus">Focus</label>
        </div>
        
        <div className={styles.sameBlock}>
          <select name="Cities" id="" onChange={e => setCity(e.target.value)}>
            <option value="Lymhurst">Lymhurst</option>
            <option value="Bridgewatch">Bridgewatch</option>
            <option value="Martlock">Martlock</option>
            <option value="Thetford">Thetford</option>
            <option value="Fort Sterling">Fort Sterling</option>
            <option value="Carleon">Carleon</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CityBonus)
