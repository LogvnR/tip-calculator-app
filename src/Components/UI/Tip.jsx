import react from 'react';

import styles from '../Styles/Tip.module.css';

const Tip = (props) => {
  return (
    <div className={styles.container}>
      <input
        className={`${styles.radio} ${styles['is-hidden']}`}
        id={props.id}
        name="tip-amount"
        type="radio"
        value={props.value}
      />
      <label className={styles['tip-amount']} htmlFor={props.id}>
        {props.amount}
      </label>
    </div>
  );
};

export default Tip;
