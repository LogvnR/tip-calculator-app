import styles from "./Styles/Results.module.css";

const Results = (props) => {
  return (
    <section className={styles.container}>
      <section className={styles.result}>
        <div className={styles.description}>
          <h2 className={styles["description-title"]}>Tip Amount</h2>
          <h4 className={styles["per-person"]}>/ person</h4>
        </div>
        <div className={styles["amount-container"]}>
          <h2 className={styles["amount"]}>{`$${props.tipPerPersonAmount}`}</h2>
        </div>
      </section>
      <section className={styles.result}>
        <div className={styles.description}>
          <h2 className={styles["description-title"]}>Total</h2>
          <h4 className={styles["per-person"]}>/ person</h4>
        </div>
        <div className={styles["amount-container"]}>
          <h2
            className={styles["amount"]}
          >{`$${props.totalPerPersonAmount}`}</h2>
        </div>
      </section>
      <section className={styles["btn-container"]}>
        <button onClick={props.reset} className={styles.btn}>
          Reset
        </button>
      </section>
    </section>
  );
};

export default Results;
