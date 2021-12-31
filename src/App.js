import styles from "./App.module.css";

import Logo from "./Assets/Logo";
import MainCard from "./Components/MainCard";

const App = () => {
  return (
    <main className={styles["main-container"]}>
      <h1>
        <Logo className={styles.logo} />
      </h1>
      <MainCard />
    </main>
  );
};

export default App;
