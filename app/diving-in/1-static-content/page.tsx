import Image from "next/image"

import { Footer } from "@/components"

import Diagram from "./static-content.svg"

const StaticContent = async () => {
  return (
    <>
      <main>
        <h1>Diving into RSCs: Static Content</h1>
        <ul>
          <li>
            This page is generated server-side using RSC <sup>new</sup>
          </li>
          <li>React components run on server</li>
          <li>HTML output sent over the wire</li>
          <li>Let&apos;s have a look at the source...</li>
        </ul>
      </main>
      <Image
        src={Diagram}
        alt="React server components generate HTML"
        width="800"
      />
      <Footer nextSlide="/diving-in/2-virtual-dom" />
    </>
  )
}

export default StaticContent
