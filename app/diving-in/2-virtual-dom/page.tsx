import { Footer } from "@/components"

const VirtualDom = async () => {
  return (
    <>
      <main>
        <h1>Diving into RSCs: Virtual DOM</h1>
        <ul>
          <li>Script tags that contain an encoded form of this content</li>
          <li>React&apos;s new line-based internal data streaming format</li>
          <li>Compact string representation of the virtual DOM</li>
          <li>
            Lets have a look in the{" "}
            <a href="https://rsc-parser.vercel.app/" target="_blank">
              RSC parser tool
            </a>
          </li>
        </ul>
      </main>
      <Footer nextSlide="/diving-in/3-virtual-dom-reconciliation" />
    </>
  )
}

export default VirtualDom
