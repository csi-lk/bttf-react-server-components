import { Footer } from "@/components"

const Resources = async () => {
  return (
    <>
      <main>
        <h1>Finishing Up: Resources</h1>
        <section>
          <aside>
            <a href="https://github.com/reactwg/server-components/discussions/5">
              <h2>RSC From Scratch</h2>
            </a>
            <p>
              In this technical deep dive, we&apos;ll implement a very
              simplified version of React Server Components (RSC) from scratch.
            </p>
          </aside>
          <aside>
            <a href="https://demystifying-rsc.vercel.app/">
              <h2>Demystifying RSC</h2>
            </a>
            <p>
              Experienced React developers who are perhaps new to RSC. Or people
              using RSC who want to understand more about how it works.
            </p>
          </aside>
        </section>
      </main>
      <Footer nextSlide="/" />
    </>
  )
}

export default Resources
