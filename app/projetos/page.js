import Footer from "@/Components/Footer"
import Navbar from "@/Components/Nav/Navbar"
import ProjeComp from "@/Components/projetComp/ProjeComp"
import "@/app/globals.css"

export default function Projetos() {
  return (
    <main className="bg-black text-white">
      <div className="bg-[url('../Images/ProjectsBackground1.png')]  mb-20 bg-no-repeat">
        <Navbar/>
        <ProjeComp/>
      </div>
      <Footer/>
    </main>
  )
}
