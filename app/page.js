import Footer from "@/Components/Footer"
import HomeComp from "@/Components/HomeComp"
import Navbar from "@/Components/Nav/Navbar"


export default function Home() {
  return (
    <main className="bg-black text-white bg-[url('../Images/HomeBG.png')] bg-[size:1300px_500px] bg-no-repeat bg-[center_top_4em] bg-fixed">
      <Navbar/>
        <HomeComp/>
      <Footer/>
    </main>
  )
}
