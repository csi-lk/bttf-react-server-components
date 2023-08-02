import { Footer } from "@/components"
import Image from "next/image"

const WhoAreYou = async () => {
  return (
    <>
      <main>
        <h1>Intro: Who are you?</h1>
        <div>
          <Image
            src="/avatar.jpeg"
            alt=""
            width="200"
            height="200"
            className="avatar"
          />
        </div>
        <a href="https://csi.lk" target="_blank">
          Callum Silcock
        </a>
        , Principal Engineer at{" "}
        <a href="https://www.anz.com.au/plus/" target="_blank">
          ANZx
        </a>
        <ul>
          <li>
            <a
              href="https://github.com/csi-lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github - csi-lk
            </a>
          </li>
          <li>
            <a
              href="https://au.linkedin.com/in/callumsilcock"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn - callumsilcock
            </a>
          </li>
          <li>
            <strike>Twitter</strike>{" "}
            <a
              href="https://twitter.com/csi_lk"
              target="_blank"
              rel="noopener noreferrer"
            >
              𝕏 - csi_lk
            </a>
          </li>
        </ul>
        <blockquote>Welcome to another CodingWithCallum™️ Talk</blockquote>
      </main>
      <Footer nextSlide="/intro/2-play-along-at-home" />
    </>
  )
}

export default WhoAreYou
