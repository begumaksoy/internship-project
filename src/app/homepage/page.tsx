import styles from "./home-page.module.css";
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
          <li className={styles.headText1}>Home</li>
          <li className={styles.headText}>Your Questions</li>
          <li className={styles.headText}>About</li>
          <li className={styles.headLogin}>Login</li>
        </ul>
      </div>
      <div className={styles.body}>
        <p></p>
      </div>
    </div>
  );
}
