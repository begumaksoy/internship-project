import styles from "./login.module.css";
import Link from "next/link";

export default function pages() {
  return (
    <div className={styles.container}>
      <div className={styles["left-panel"]}>
        <p className={styles["welcome-text"]}>Welcome,</p>
        <p className={styles["sign-up-text"]}>Please sign up to login</p>
        <Link href="/sign-up">
          <button className={styles["sign-up-button"]}>Sign Up</button>
        </Link>
      </div>
      <div className={styles["right-panel"]}>
        <p className={styles["login-text"]}>Login</p>
        <div className={styles["person-email"]}>
          <label className="person-email">Enter your email or username</label>
          <input
            type="email"
            id="person-email"
            name="person-email"
            className={styles["person-email-input"]}
          />
        </div>

        <div className={styles["person-password"]}>
          <label className="person-password">Enter your password</label>
          <input
            type="password"
            id="person-password"
            name="person-password"
            className={styles["person-password-input"]}
          />
        </div>

        <div>
          <button className={styles["login-button"]}>Login</button>
        </div>
      </div>
    </div>
  );
}
