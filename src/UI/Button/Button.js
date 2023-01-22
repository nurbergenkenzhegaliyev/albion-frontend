import { memo } from "react";
import styles from "./Button.module.scss";

function Button({ children, onclick, style, active }) {

  const classList = `${styles.button} ${styles[style]} ${active && styles.active} ${style && styles.tierButton}`

  return (
    <button className={classList} onClick={onclick}>
      {children}
    </button>
  );
}

export default memo(Button);
