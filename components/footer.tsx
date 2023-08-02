import Link from "next/link"

import styles from "./footer.module.css"

export const Footer = ({ nextSlide }: { nextSlide: string }) => (
  <div className={styles.footer}>
    <span
      dangerouslySetInnerHTML={{
        __html: `<a href="#" onClick="this.href='/view-source'+location.pathname" class="view-source" target="_blank">View Source</a>`,
      }}
    />{" "}
    |<Link href="/">Home</Link> | <Link href={nextSlide}>Next Slide</Link>
  </div>
)
