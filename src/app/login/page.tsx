import styles from "./login.module.css";
import Link from "next/link";

export default function pages() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <p className={styles["welcomeText"]}>Welcome,</p>
        <p className={styles.signUpText}>Please sign up to login</p>
        <Link href="/sign-up">
          <button className={styles.signUpButton}>Sign Up</button>
        </Link>
      </div>
      <div className={styles["rightPanel"]}>
        <p className={styles["loginText"]}>Login</p>
        <div className={styles["person-email"]}>
          <label className="person-email">Enter your email or username</label>
          <input
            type="email"
            id="person-email"
            name="person-email"
            className={styles["personEmailInput"]}
          />
        </div>

        <div className={styles["personPassword"]}>
          <label className="person-password">Enter your password</label>
          <input
            type="password"
            id="person-password"
            name="person-password"
            className={styles["personPasswordInput"]}
          />
        </div>

        <div>
          <button className={styles["loginButton"]}>Login</button>
        </div>
      </div>
    </div>
  );
}
