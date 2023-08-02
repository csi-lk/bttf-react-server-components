import { Footer } from "@/components"
import { ClientComponent } from "./client-component"

const VirtualDomReconciliation = async () => {
  return (
    <>
      <main>
        <h1>Diving into RSCs: Virtual DOM Reconciliation</h1>
        <ClientComponent />
        <ul>
          <li>On page load reconcile Virtual DOM / returned static DOM</li>
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
      <Footer nextSlide="/diving-in/4-server-components-as-children" />
    </>
  )
}

export default VirtualDomReconciliation
