import { Footer } from "@/components"

const Questions = async () => {
  return (
    <>
      <main>
        <h1>Finishing Up: Questions?</h1>
        <p>Example questions:</p>
        <ul>
          <li>Why is this so confusing?</li>
          <li>Where do I find out more?</li>
          <li>Should I just give up and go back to PHP?</li>
        </ul>
        👋
      </main>
      <Footer nextSlide="/finishing-up/3-resources" />
    </>
  )
}

export default Questions
