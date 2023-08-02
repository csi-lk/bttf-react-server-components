import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <Image
        src="./delorean.svg"
        alt="Styled outline drawing of a delorean from the Back To The Future movie"
        width="300"
        height="200"
      />
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
      <p>
        This talk has been put together as a NextJS backed site so I can show
        how the &apos;slides&apos; are being rendered while talking about
        them...
      </p>
      <h2>The Intro</h2>
      <ol>
        <li>What are &quot;React Server Components&quot; (RSC) anyway?</li>
        <li>So many TLAs...</li>
        <li>Why are you using RSCs?</li>
        <li>Let&apos;s go back in time</li>
      </ol>
      <h2>Diving into RSCs</h2>
      <ol>
        <li>
          <Link href="diving-in/1-static-content">Static Content</Link>
        </li>
        <li>
          <Link href="diving-in/2-virtual-dom">Virtual DOM</Link>
        </li>
        <li>
          <Link href="diving-in/3-virtual-dom-reconciliation">
            Virtual DOM Reconciliation
          </Link>
        </li>
        <li>
          <Link href="diving-in/4-server-components-as-children">
            Server components as Children
          </Link>
        </li>
      </ol>
    </main>
  )
}
