import Image from "next/image"

import { Footer } from "@/components"

import { MyClientComponent } from "./my-client-component"

import Diagram from "./client-components.svg"

const ClientComponents = async () => {
  return (
    <>
      <main>
        <h1>Diving into RSCs: Client Components</h1>
        <MyClientComponent />
        <ul>
          <li>
            If components require interactivity or hooks they should run on the
            client
          </li>
          <li>
            Default is to treat components as server components <sup>new</sup>
          </li>
          <li>
            Opt in with <code>&apos;use client&apos;;</code>
          </li>
          <li>
            Client-components by default are pre-rendered on the server (SSR){" "}
            <sup>old</sup>
          </li>
          <li>
            Lets go to the code again and find <code>MyClientComponent</code>{" "}
            <code>$La</code>
          </li>
        </ul>
      </main>
      <Image
        src={Diagram}
        alt="React server components generate HTML and Virtual DOM"
        width="1000"
      />
      <Footer nextSlide="/diving-in/4-virtual-dom-reconciliation" />
    </>
  )
}

export default ClientComponents
