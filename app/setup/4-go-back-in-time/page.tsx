import { Footer } from "@/components"

const GoBackInTime = async () => {
  return (
    <>
      <main>
        <h1>Setup: Go Back In Time</h1>
        <aside>
          What&apos;s <sup>old</sup> is <sup>new</sup> again
        </aside>
        <ul>
          <li>I&apos;ll try to call out the new and the old</li>
          <li>RSC fits nicely into the existing way you write react</li>
        </ul>
        <p>
          <strong>Claim:</strong> “React Server Components (RSC) are just PHP”.
          <br />
          <strong>Reality:</strong> RSC are special because it finally means we
          can use the <em>same tech</em> to render components{" "}
          <em>on both the client or the server</em>. One line of code converts a
          server component into a client component:{" "}
          <code>&apos;use client&apos;</code>
        </p>
      </main>
      <Footer nextSlide="/diving-in/1-static-content" />
    </>
  )
}

export default GoBackInTime
