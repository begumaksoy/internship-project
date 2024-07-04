import styles from "./login.module.css";

export default function pages() {
  return (
    <div className={styles.container}>
      <div className={styles["left-panel"]}>
        <p className={styles["welcome-text"]}>Welcome,</p>
        <p className={styles["sign-up-text"]}>Please sign up to login</p>
        <button className={styles["sign-up-button"]}>Sign Up</button>
      </div>
      <div className={styles["right-panel"]}>
        <p className={styles["login-text"]}>Login</p>
        <div className={styles["person-name"]}>
          <label className={styles["person-name"]}>Enter your first name</label>
          <input
            type="text"
            id="person-name-input"
            name="person-name"
            className={styles["person-name-input"]}
          />
        </div>

        <div className={styles["person-surname"]}>
          <label className="person-surname">Enter your last name</label>
          <input
            type="text"
            id="person-surname"
            name="person-surname"
            className={styles["person-surname-input"]}
          />
        </div>

        <div className={styles["person-email"]}>
          <label className="person-email">Enter your email</label>
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
