import { Footer } from "@/components"

const PlayAtHome = async () => {
  return (
    <>
      <main>
        <h1>Intro: Play At Home</h1>
        <p>You can interactively follow allong with me at home</p>
        <strong style={{ fontSize: 80 }}>
          <a href="https://rsc.csi.lk" target="_blank">
            rsc.csi.lk
          </a>
        </strong>
      </main>
      <Footer nextSlide="/setup/1-what-are-rsc" />
    </>
  )
}

export default PlayAtHome
