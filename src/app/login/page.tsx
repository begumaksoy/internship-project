"use client";
import styles from "./login.module.css";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { User } from "../actions/user";
let pattern =
  /^([a-z]|[0-9]|(-|_)([a-z]|[0-9])+)+([a-z]|[0-9]|(-|_|.)([a-z]|[0-9])+)*(-|_)?@([a-z]|[0-9])+(.([a-z]|[0-9])+)*.[a-z]{2,}$/i;

export default function pages() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (pattern.test(email)) {
      try {
        const params: Omit<User, "fullname" | "username" | "id"> = {
          email: email,
          password: password,
        };

        const response = await axios.post("/api/login", params);

        if (response.status == 201) {
          const res = response.data;
          console.log(res);
        }

        console.log("valid");
      } catch (err) {
        const response = err as AxiosError;
        const res = response.response?.data as any;
        setErrors(res.errors);
      }
    } else {
      console.log("not valid");
    }
  };
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
        <form onSubmit={handleLogin} className="signup-form">
          <div className={styles["person-email"]}>
            <label className="person-email">Enter your email or username</label>
            <input
              type="email"
              onChange={(e) => setEmail((e.currentTarget as any).value)}
              id="person-email"
              name="person-email"
              className={styles["personEmailInput"]}
            />
          </div>

          <div className={styles["personPassword"]}>
            <label className="person-password">Enter your password</label>
            <input
              type="password"
              onChange={(e) => setPassword((e.currentTarget as any).value)}
              id="person-password"
              name="person-password"
              className={styles["personPasswordInput"]}
            />
          </div>

          <div>
            <button className={styles["loginButton"]}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
