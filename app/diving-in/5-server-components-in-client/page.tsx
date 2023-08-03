import Image from "next/image"

import { Footer } from "@/components"

import { ClientComponent } from "./client-component"
import { ServerComponent } from "./server-component"

const ServerInClient = async () => {
  return (
    <>
      <main>
        <h1>Diving into RSCs: Server Component in Client</h1>
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>
        <ol>
          <li>
            Server runs <code>ServerComponent</code>
          </li>
          <li>
            ClientComponent is inserted into the Virtual DOM aka{" "}
            <code>$La</code>
          </li>
          <li>
            <code>ClientComponent</code> <code>{"{children}"}</code> set to{" "}
            <code>ServerComponent</code> output
          </li>
        </ol>
        <hr />
        <ul>
          <li>
            <code>ClientComponent</code> doesn&apos;t care!
          </li>
          <li>Back to the code!</li>
        </ul>
      </main>
      <Footer nextSlide="/finishing-up/1-further-topics" />
    </>
  )
}

export default ServerInClient
