"use client";
import { FormEvent, useState } from "react";
import style from "./sign-up.module.css";
import { saveUser } from "../actions/user";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";

let pattern =
  /^([a-z]|[0-9]|(-|_)([a-z]|[0-9])+)+([a-z]|[0-9]|(-|_|.)([a-z]|[0-9])+)*(-|_)?@([a-z]|[0-9])+(.([a-z]|[0-9])+)*.[a-z]{2,}$/i;

export default function pages() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (pattern.test(email)) {
      try {
        const response = await axios.post("/api/sign-up", {
          email: email,
          password: password,
          fullname: name,
          username: username,
        });

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
    <div className={style["container"]}>
      <div className={style["left-panel"]}>
        <p className={style["sign-up-text"]}>Sign Up</p>
        <p>Already signed up? Click to login.</p>
        <Link href="/login">
          <button className={style["login-button"]}>Log in</button>
        </Link>
      </div>
      <div className={style["right-panel"]}>
        <Image
          src={"/appLogo.png"}
          width={200}
          height={100}
          alt="app logo"
        ></Image>
        {errors.map((error) => (
          <li>{error}</li>
        ))}
        <form onSubmit={handleSubmit} className="signup-form">
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
            onChange={(e) => setName((e.currentTarget as any).value)}
            className={style["person-info"]}
            placeholder="Name Surname"
          />
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername((e.currentTarget as any).value)}
            className={style["person-info"]}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword((e.currentTarget as any).value)}
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
