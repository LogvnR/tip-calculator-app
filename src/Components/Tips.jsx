import react from 'react';

import styles from './Styles/Tips.module.css';
import Tip from './UI/Tip';

const Tips = () => {
  const uncheckHandler = () => {
    const radio = document.querySelector('input[type=radio]:checked');
    radio.checked = false;
  };

  return (
    <section className={styles.container}>
      <p>Select Tip %</p>
      <div className={styles['tip-container']}>
        <Tip value={5} amount="5%" id="radio1" />
        <Tip value={10} amount="10%" id="radio2" />
        <Tip value={15} amount="15%" id="radio3" />
        <Tip value={20} amount="20%" id="radio4" />
        <Tip value={25} amount="25%" id="radio5" />
        <div onClick={uncheckHandler} className={styles['custom-container']}>
          <input
            name="tip-amount"
            dir="rtl"
            className={styles.custom}
            type="number"
            placeholder="CUSTOM"
          />
        </div>
      </div>
    </section>
  );
};

export default Tips;
