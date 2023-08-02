import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.image}>
        <Image
          src="./delorean.svg"
          alt="Styled outline drawing of a delorean from the Back To The Future movie"
          width="236"
          height="150"
        />
      </div>
      <h1>
        Back to the Future: What&apos;s New and Old About Server Components
      </h1>
      <p>
        A talk about React Server components by{" "}
        <a href="https://csi.lk" target="_blank">
          Callum Silcock
        </a>
        , Principal Engineer at{" "}
        <a href="https://plus.anz" target="_blank">
          ANZ
        </a>{" "}
        for{" "}
        <a href="https://melbjs.com/" target="_blank">
          MelbJS Aug / 2023
        </a>
      </p>
      <h2>The Slides:</h2>
      <ol>
        <li></li>
      </ol>
    </main>
  )
}
