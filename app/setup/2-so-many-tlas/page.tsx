import { Footer } from "@/components"

const SoManyTLAs = async () => {
  return (
    <>
      <main>
        <h1>Setup: So many TLAs</h1>
        <ul>
          <dl>
            <dt>SSG (Static Site Generation)</dt>
            <dd>
              run when you build your application, and the generated output is
              static
            </dd>
          </dl>
          <dl>
            <dt>SSR (Server-Side Rendering)</dt>
            <dd>
              runs at the time it is requested, result may be cached for future
              requests
            </dd>
          </dl>
          <dl>
            <dt>CSR (Client-Side Rendering)</dt>
            <dd>
              delivered to the browser, which generates content that is inserted
              into the DOM
            </dd>
          </dl>
        </ul>
      </main>
      <Footer nextSlide="/diving-in/2-virtual-dom" />
    </>
  )
}

export default SoManyTLAs
