import Image from "next/image"

import { Footer } from "@/components"

import Diagram from "./virtual-dom.svg"

const VirtualDom = async () => {
  return (
    <>
      <main>
        <h1>Diving into RSCs: Virtual DOM</h1>
        <ul>
          <li>Script tags that contain an encoded form of this content</li>
          <li>React&apos;s new line-based internal data streaming format</li>
          <li>
            Compact string representation of the virtual DOM <sup>new</sup>
          </li>
          <li>
            Lets have a look in the{" "}
            <a href="https://rsc-parser.vercel.app/" target="_blank">
              RSC parser tool
            </a>
          </li>
        </ul>
      </main>
      <Image
        src={Diagram}
        alt="React server components generate HTML and Virtual DOM"
        width="800"
      />
      <Footer nextSlide="/diving-in/3-client-components" />
    </>
  )
}

export default VirtualDom
