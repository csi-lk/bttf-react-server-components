import Image from "next/image"

import { Footer } from "@/components"

import { ClientComponent } from "./client-component"
import Diagram from "./virtual-dom-reconciliation.svg"

const VirtualDomReconciliation = async () => {
  return (
    <>
      <main>
        <h1>Diving into RSCs: Virtual DOM Reconciliation</h1>
        <ClientComponent />
        <ul>
          <li>
            On page load reconcile Virtual DOM / returned static DOM{" "}
            <sup>old</sup>
          </li>
          <li>If they don&apos;t match throw error</li>
          <ul>
            <li>
              <samp>Warning: Text content did not match</samp>
            </li>
          </ul>
          <li>Wait, how?</li>
          <li>And now our page is entirely client rendered 😭</li>
          <ul>
            <li>
              <samp>[...] the entire root will switch to client rendering</samp>
            </li>
          </ul>
        </ul>
      </main>
      <Image
        src={Diagram}
        alt="React server components generate HTML and Virtual DOM for Reconciliation"
        width="1000"
      />
      <Footer nextSlide="/finishing-up/1-further-topics" />
    </>
  )
}

export default VirtualDomReconciliation
