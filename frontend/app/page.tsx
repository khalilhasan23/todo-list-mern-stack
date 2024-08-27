import styles from "./page.module.css";
import Nav from "@/components/nav";

const buttenNames = {
  Home: "/",
  Login: "auth/login",
  Register: "auth/register"
}

export default function Home() {
  return (
    <main>
      <Nav buttenNames={buttenNames} />
      <div className="d-flex justify-content-center">
        <h1 className={styles.firstH1}>Welcome to To-Do List App!</h1>
      </div>
      <div className="d-flex justify-content-center">
        <img src="homePage.png" alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <h3 className={styles.firstH3}>Your ultimate task management tool to keep you organized and productive.</h3>
      </div>
    </main>
  );
}
