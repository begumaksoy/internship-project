import Link from "next/link";
import styles from "./about.module.css";
import Image from "next/image";

export default function pages() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/appLogo.png"}
          width={200}
          height={100}
          alt="app logo"
        ></Image>
        <ul>
          <li className={styles.headText1}>
            <Link href="/homepage">
              <button>Home</button>
            </Link>
          </li>
          <li className={styles.headText}>
            <Link href="/askQuestion">
              <button>Questions</button>
            </Link>
          </li>
          <li className={styles.headText}>
            <Link href="/about">
              <button>About</button>
            </Link>
          </li>
          <li className={styles.headLogin}>
            <Link href="/login">
              <button>Log in</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.body}>
        <h1 className={styles.h1Text}>Who made this app?</h1>
        <p className={styles.mainText} id="mainText">
          This app is created by an intern named Begüm Aksoy in her summer
          internship at Kafein Technology.
        </p>
        <h1 className={styles.h1Text2}>What is the inspiration?</h1>

        <p className={styles.mainText}>
          She got inspired by the working culture of the Kafein Technology,
          their multi-customer project groups between their workers.
        </p>
        <p className={styles.mainText}>
          Kafein workers are all so open to socialize, why wouldn't be a
          platform for workers to socialize within other group members and they
          reply to the questions whenever they want?
        </p>
        <div className={styles.bodyText}></div>
      </div>
    </div>
  );
}
