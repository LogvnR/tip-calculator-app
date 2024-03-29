import styles from "./Styles/Results.module.css";

const Results = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["result-container"]}>
        <div className={styles.result}>
          <div className={styles.description}>
            <p className={styles["description-title"]}>Tip Amount</p>
            <p className={styles["per-person"]}>/ person</p>
          </div>
          <div className={styles["amount-container"]}>
            <p className={styles["amount"]}>{`$${props.tipPerPersonAmount}`}</p>
          </div>
        </div>
        <div className={styles.result}>
          <div className={styles.description}>
            <p className={styles["description-title"]}>Total</p>
            <p className={styles["per-person"]}>/ person</p>
          </div>
          <div className={styles["amount-container"]}>
            <p
              className={styles["amount"]}
            >{`$${props.totalPerPersonAmount}`}</p>
          </div>
        </div>
      </div>
      <div className={styles["btn-container"]}>
        <button
          disabled={!props.btnActive}
          onClick={props.reset}
          className={
            props.btnActive ? styles.btn : `${styles.btn} ${styles.disabled}`
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Results;
