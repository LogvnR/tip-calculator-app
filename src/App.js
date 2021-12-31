import styles from "./App.module.css";

import Logo from "./Assets/Logo";
import MainCard from "./Components/MainCard";

const App = () => {
  return (
    <main className={styles["main-container"]}>
      <div className={styles["logo-container"]}>
        <Logo className={styles.logo} />
        <h1>Splitter</h1>
      </div>

      <MainCard />
    </main>
  );
};

export default App;
