import styles from "./Styles/Tips.module.css";
import Tip from "./UI/Tip";

const Tips = (props) => {
  const uncheckHandler = () => {
    const radio = document.querySelector("input[type=radio]:checked");
    if (radio === null) {
      return;
    } else {
      radio.checked = false;
    }
  };

  return (
    <div className={styles.container}>
      <p>Select Tip %</p>
      <div className={styles["tip-container"]}>
        <Tip
          inputHandler={props.inputHandler}
          value={5}
          amount="5%"
          id="radio1"
        />
        <Tip
          inputHandler={props.inputHandler}
          value={10}
          amount="10%"
          id="radio2"
        />
        <Tip
          inputHandler={props.inputHandler}
          value={15}
          amount="15%"
          id="radio3"
        />
        <Tip
          inputHandler={props.inputHandler}
          value={20}
          amount="20%"
          id="radio4"
        />
        <Tip
          inputHandler={props.inputHandler}
          value={25}
          amount="25%"
          id="radio5"
        />
        <div onClick={uncheckHandler} className={styles["custom-container"]}>
          <label className={styles["custom-label"]} htmlFor="custom">
            Custom Tip
          </label>
          <input
            min={0}
            step={0.01}
            onChange={props.inputHandler}
            name="custom"
            className={styles.custom}
            type="number"
            placeholder="CUSTOM"
          />
        </div>
      </div>
    </div>
  );
};

export default Tips;
