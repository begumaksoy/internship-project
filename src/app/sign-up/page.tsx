import style from "./sign-up.module.css";

export default function pages() {
  return (
    <div className={style["container"]}>
      <div className={style["left-panel"]}>
        <p className={style["sign-up-text"]}>Sign Up</p>
      </div>
      <div className={style["right-panel"]}>
        <form className="signup-form">
          <input
            type="text"
            className={style["person-info"]}
            placeholder="Telephone number or E-mail address"
          />
          <input
            type="text"
            className={style["person-info"]}
            placeholder="Name Surname"
          />
          <input
            type="text"
            className={style["person-info"]}
            placeholder="Username"
          />
          <input
            type="password"
            className={style["person-info"]}
            placeholder="Password"
          />

          <p className={style["terms-text"]}>
            With signing up, you would accept our{" "}
            <a href="https://help.instagram.com/581066165581870/?cms_id=581066165581870">
              <u> Terms of Use </u>
            </a>
            ,{" "}
            <a href="https://www.facebook.com/privacy/policy">
              <u>Privacy Policy</u>
            </a>{" "}
            and{" "}
            <a href="https://privacycenter.instagram.com/policies/cookies/">
              <u>Cookies Policy</u>
            </a>{" "}
          </p>
          <button className={style["submit-button"]} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
