import Navbar from "@/Components/Nav/Navbar"
import Footer from "@/Components/Footer"
import AboutMe from "@/Components/aboutMe/AboutMe"

import "@/app/globals.css"

export default function About() {
  return (
    <main className="bg-black text-white bg-[url('../Images/PerfilBackgoundLights.png')] bg-cover bg-blend-hard-light">
      <Navbar/>
        <AboutMe/>
      <Footer/>
    </main>
  )
}
