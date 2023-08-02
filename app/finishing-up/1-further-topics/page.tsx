import { Footer } from "@/components"

const FurtherTopics = async () => {
  return (
    <>
      <main>
        <h1>Finishing Up: Further Topics</h1>
        There&apos;s so much more I&apos;d like to have talked about but felt
        this is a good stopping point for a 30min talk
        <ul>
          <li>Disabling SSR for Client Components</li>
          <li>Server components in Client Components</li>
          <li>Client Components in Server Components</li>
          <li>
            <code>async</code>!?
          </li>
        </ul>
      </main>
      <Footer nextSlide="/finishing-up/2-questions" />
    </>
  )
}

export default FurtherTopics
