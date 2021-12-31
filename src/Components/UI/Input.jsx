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
          min={0}
          step={props.step}
          onChange={props.inputHandler}
          name={props.name}
          type="number"
          className={
            props.valid ? styles.input : `${styles.input} ${styles.error}`
          }
        />
      </div>
    </section>
  );
};

export default Input;
