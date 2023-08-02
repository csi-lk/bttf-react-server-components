import Link from "next/link"

import styles from "./footer.module.css"

export const Footer = ({ nextSlide }: { nextSlide: string }) => (
  <div className={styles.footer}>
    <Link href="/">Home</Link> | <Link href={nextSlide}>Next Slide</Link>
  </div>
)
