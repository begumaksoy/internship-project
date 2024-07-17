"use client";
import { FormEvent, useState } from "react";
import style from "./sign-up.module.css";
import { saveUser } from "../actions/user";
let pattern =
  /^([a-z]|[0-9]|(-|_)([a-z]|[0-9])+)+([a-z]|[0-9]|(-|_|.)([a-z]|[0-9])+)*(-|_)?@([a-z]|[0-9])+(.([a-z]|[0-9])+)*.[a-z]{2,}$/i;

export default function pages() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (pattern.test(email)) {
      console.log("valid");
    } else {
      console.log("not valid");
    }
  };

  return (
    <div className={style["container"]}>
      <div className={style["left-panel"]}>
        <p className={style["sign-up-text"]}>Sign Up</p>
      </div>
      <div className={style["right-panel"]}>
        <form
          onSubmit={handleSubmit}
          // action={saveUser}
          className="signup-form"
        >
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail((e.currentTarget as any).value)}
            className={style["person-info"]}
            placeholder="E-mail address"
          />
          <input
            type="text"
            name="fullname"
            className={style["person-info"]}
            placeholder="Name Surname"
          />
          <input
            type="text"
            name="username"
            className={style["person-info"]}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
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
