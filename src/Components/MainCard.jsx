import react from 'react';

import styles from './Styles/MainCard.module.css';
import Input from './UI/Input';

import Dollar from '../Assets/Dollar';
import Person from '../Assets/Person';
import Tips from './Tips';

const MainCard = () => {
  return (
    <form className={styles.main}>
      <Input name="amount" label="Bill">
        <Dollar />
      </Input>
      <Tips />
      <Input name="persons" label="Number of People">
        <Person />
      </Input>
    </form>
  );
};

export default MainCard;
