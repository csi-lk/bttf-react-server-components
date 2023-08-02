import { Footer } from "@/components"

const PlayAtHome = async () => {
  return (
    <>
      <main>
        <h1>Intro: Play At Home</h1>
        <p>You can interactively follow allong with me at home</p>
        {/* TODO: Deploy to easily consumable url */}
      </main>
      <Footer nextSlide="/setup/1-what-are-rsc" />
    </>
  )
}

export default PlayAtHome
