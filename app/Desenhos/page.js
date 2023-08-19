import DesenhosComp from "@/Components/Desenhos/DesenhosComp"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Nav/Navbar"
import '@/app/globals.css'

export default function Desenhos() {
  return (
    <main className="bg-black text-white h-screen">
      <div className="bg-black bg-[url('../Images/DesenhoBackground.png')] bg-cover bg-no-repeat">
        <Navbar/>
        <DesenhosComp/>
      </div>
      <Footer/>
    </main>
  )
}
