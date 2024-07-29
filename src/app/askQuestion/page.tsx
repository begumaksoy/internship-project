import Link from "next/link";
import styles from "./question-page.module.css";
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
              <button>Ask Question</button>
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
        <div className={styles.bodyText}>
          <form className="question-form">
            <div className={styles["question-title"]}>
              <label className="question-title">Add a title</label>
              <input
                type="text"
                placeholder="Title"
                id="title"
                name="title"
                className={styles["titleInput"]}
              />
            </div>

            <div className={styles["question"]}>
              <label className="question">Add your question</label>
              <textarea
                placeholder="Add your description here..."
                id="question"
                name="question"
                className={styles["questionInput"]}
              ></textarea>
            </div>

            <div>
              <button className={styles["submitButton"]}>
                Submit Your Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
