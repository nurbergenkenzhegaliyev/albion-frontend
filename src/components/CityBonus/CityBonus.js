import { memo } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./CityBonus.module.scss";

function CityBonus({focus, setFocus, premium, setPremium,returnRate,setReturnRate }) {
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
            checked={premium}
            onChange={() => setPremium(!premium)}
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
              checked={focus}
              onChange={() => setFocus(!focus)}
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
        {city}
        
        <div className={styles.sameBlock}>
          <input onChange={e=>setReturnRate(e.target.value)} value={returnRate} className={styles.returnRate} />
        </div>

      </div>
    </div>
  );
}

CityBonus.propTypes = {
  focus: PropTypes.bool,
  setFocus: PropTypes.func,
  premium: PropTypes.bool,
  setPremium: PropTypes.func,
  returnRate: PropTypes.number,
  setReturnRate: PropTypes.func,
};

export default memo(CityBonus)
