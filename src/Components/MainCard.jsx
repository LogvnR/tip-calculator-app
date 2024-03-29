import { useState, useEffect } from "react";

import styles from "./Styles/MainCard.module.css";
import Input from "./UI/Input";

import Dollar from "../Assets/Dollar";
import Person from "../Assets/Person";
import Tips from "./Tips";
import Results from "./Results";

const MainCard = () => {
  const [amount, setAmount] = useState();
  const [tip, setTip] = useState(0);
  const [persons, setPersons] = useState(1);
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const [amountValid, setAmountValid] = useState(true);
  const [personsValid, setPersonsValid] = useState(true);
  const [btnActive, setBtnActive] = useState(false);

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const tipChangeHandler = (e) => {
    setTip(e.target.value);
  };
  const personsChangeHandler = (e) => {
    setPersons(e.target.value);
  };

  useEffect(() => {
    if (amount > 0 && tip > 0 && persons >= 1) {
      const tipPercent = tip / 100;
      const tipPerPerson = ((amount * tipPercent) / persons).toFixed(2);
      const tipAmount = amount * tipPercent;
      const amountPerPerson = (amount / persons + tipAmount / persons).toFixed(
        2
      );
      setTipAmount(tipPerPerson);
      setTotalAmount(amountPerPerson);
      setBtnActive(true);
    } else {
      setTipAmount("0.00");
      setTotalAmount("0.00");
      setBtnActive(false);
    }
  }, [amount, tip, persons]);

  useEffect(() => {
    if (amount < 0.01) {
      setAmountValid(false);
    } else {
      setAmountValid(true);
    }
  }, [amount]);

  useEffect(() => {
    if (persons < 1) {
      setPersonsValid(false);
    } else {
      setPersonsValid(true);
    }
  }, [persons]);

  const resetForm = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    form.reset();
    setAmount();
    setTip(0);
    setPersons(1);
  };

  return (
    <form className={styles.main}>
      <div className={styles["input-container"]}>
        <Input
          valid={amountValid}
          step={0.01}
          id="amount"
          inputHandler={amountChangeHandler}
          name="amount"
          label="Bill"
          placeholder="0"
        >
          <Dollar />
        </Input>
        <Tips inputHandler={tipChangeHandler} />
        <Input
          step={1}
          id="persons"
          inputHandler={personsChangeHandler}
          valid={personsValid}
          name="persons"
          label="Number of People"
          placeholder="1"
        >
          <Person />
        </Input>
      </div>

      <Results
        reset={resetForm}
        tipPerPersonAmount={tipAmount}
        totalPerPersonAmount={totalAmount}
        btnActive={btnActive}
      />
    </form>
  );
};

export default MainCard;
