import react from "react";

import styles from "../Styles/Input.module.css";

const Input = (props) => {
  return (
    <section className={styles["amount-container"]}>
      <label className={styles["amount-title"]} htmlFor={props.name}>
        {props.label}
      </label>
      <div className={styles["input-container"]}>
        {props.children}
        <input
          onChange={props.inputHandler}
          dir="rtl"
          name={props.name}
          type="number"
        />
      </div>
    </section>
  );
};

export default Input;
