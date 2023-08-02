import { Footer } from "@/components"

const WhatAreRSC = async () => {
  return (
    <>
      <main>
        <h1>
          Intro: What are &quot;React Server Components&quot; (RSC) anyway?
        </h1>
        <ul>
          <li>Not a special new thing</li>
          <li>How React runs and works when executed on the server</li>
        </ul>
      </main>
      <Footer nextSlide="/diving-in/2-virtual-dom" />
    </>
  )
}

export default WhatAreRSC
