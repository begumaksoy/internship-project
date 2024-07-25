import Link from "next/link";
import styles from "./home-page.module.css";
import Image from "next/image";

export default function pages() {
  return (
    <div className={styles.container}>
      <img src="/homepagebackground.png" alt="" />
      <div className={styles.header}>
        <Image
          src={"/appLogo.png"}
          width={200}
          height={100}
          alt="app logo"
        ></Image>
        <ul>
          <li className={styles.headText1}>Home</li>
          <li className={styles.headText}>Questions</li>
          <li className={styles.headText}>About</li>
          <li className={styles.headLogin}>
            <Link href="/login">
              <button>Log in</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyText}>
          <p>Every Kafeiner has a tab open to KafeinFlow</p>
          <button>Log in</button>
          <button>Sign up</button>
          <button>See the community</button>
        </div>
      </div>
    </div>
  );
}
