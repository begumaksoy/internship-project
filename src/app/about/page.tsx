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
        <p className="mainText" id="mainText">
          This app is created by an intern named Begüm Aksoy in her mandatory
          internship in Kafein Technology.
        </p>
        <div className={styles.bodyText}></div>
      </div>
    </div>
  );
}
