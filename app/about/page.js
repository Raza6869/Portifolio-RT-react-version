import Navbar from "@/Components/Nav/Navbar"
import Footer from "@/Components/Footer"
import AboutMe from "@/Components/aboutMe/AboutMe"

export default function About() {
  return (
    <main className="bg-black text-white bg-[url('../Images/PerfilBackgoundLights.png')] bg-cover bg-center bg-blend-hard-light -mb-10">
      <Navbar/>
        <AboutMe/>
      <Footer/>
    </main>
  )
}
