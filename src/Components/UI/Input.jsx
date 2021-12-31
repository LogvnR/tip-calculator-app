import styles from "../Styles/Input.module.css";

const Input = (props) => {
  return (
    <div className={styles["amount-container"]}>
      <div className={styles["label-container"]}>
        <label className={styles["amount-title"]} htmlFor={props.id}>
          {props.label}
        </label>
        {!props.valid && <p className={styles["error-label"]}>Cannot be 0</p>}
      </div>
      <div className={styles["input-container"]}>
        {props.children}
        <input
          min={0}
          step={props.step}
          onChange={props.inputHandler}
          name={props.name}
          id={props.id}
          type="number"
          className={
            props.valid ? styles.input : `${styles.input} ${styles.error}`
          }
        />
      </div>
    </div>
  );
};

export default Input;
