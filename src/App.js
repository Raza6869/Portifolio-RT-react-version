
import './index.css';
import razaLogo from "./Desenhos/raza-logo-semfundo.png"
import Header from "./components/Header"
import Home from "./components/Home"
import Games from "./components/Games"
import Contact from './components/Contact';
import AbouMe from './components/About';

import {Link, Outlet} from "react-router-dom";


export default function App() {  
  return (
    <body className='h-screen bg-zinc-950 overflow-x-hidden'>
      <div className='text-white bg-home md:bg-repeat bg-cover md:bg-[bottom_left_24rem] w-full md:h-[800px] bg-fixed sm:h-4/5 sm:bg-center sm:bg-no-repeat' id="home container">
        
        <Header />

        <Home />
      </div>

      <div className='text-white bg-about bg-cover bg-fixed'>
        <AbouMe/>
      </div>

      <div className='' id="Projetos">
          <div className='bg-black text-white p-40 text-center bg-raza-logo bg-no-repeat bg-center bg-[length:500px_500px] bg-fixed'>
              <div className='text-8xl '>
                  <h1 className='font-adamcg'>PRINCIPAIS PROJETOS</h1>
              </div>
          </div>
          <div className="Jogos">
                    
            <Games />

          </div>    
      </div>
      
      <div className="" id="Desenhos">
          <div className='bg-black text-white p-40 text-center bg-raza-logo bg-no-repeat bg-center bg-[length:500px_500px] bg-fixed'>
              <div className='text-8xl '>
                  <h1 className='font-adamcg'>ILUSTRAÇÕES</h1>
              </div>
          </div>
          <div className='bg-desenho bg-cover bg-fixed'>
                <ul id="nav" className="text-red-800 text-5xl font-adamcg flex justify-center items-center mb-16 shadow-lg">
                    <li><Link to='/Color' className="bg-zinc-900 p-10 hover:bg-red-900 hover:text-white transition-colors ease-in">Coloridos</Link></li>
                    <li><Link to='/Sketch' className="bg-zinc-900 p-10 hover:bg-red-900 hover:text-white transition-colors ease-in">Sketchs</Link></li>
                    <li><Link to='/Splash' className="bg-zinc-900 p-10 hover:bg-red-900 hover:text-white transition-colors ease-in">Splashs Arts</Link></li>
                </ul>

                <div className='grid grid-cols-3 gap-10 p-8'>
                    <Outlet/>
                </div>
        </div>
      </div>

      <div id='Contato' className='bg-zinc-950'>
        <div className='bg-black text-white p-40 text-center bg-raza-logo bg-no-repeat bg-center bg-[length:500px_500px] bg-fixed'>
          <div className='text-8xl '>
            <h1 className='font-adamcg'>contato</h1>
          </div>
        </div>
        
        <Contact/>
      
      </div>

      <div id='footer' className='bg-zinc-950 flex justify-around text-white py-2 font-open text-xl font-medium items-center'>
        <div className=''>
          <img src={razaLogo} alt='raza logo' className='h-72'/>
        </div >
            
        <div className='-ml-24 text-3xl'>
          <a href='/'>Rafael Thumaza</a>
        </div>

        <div className='text-4xl flex gap-2'>
          <a href="/"><i className='bx bxl-whatsapp text-white text-center hover:font-semibold'></i></a>
          <a href="/"><i className='bx bxl-instagram text-white text-center hover:font-semibold'></i></a>
          <a href="/"><i className='bx bxl-github text-white text-center hover:font-semibold' ></i></a>
          <a href="/"><i className='bx bxl-linkedin-square text-white text-center hover:font-semibold' ></i></a>
        </div>
      </div>
      

  </body>    
  );
}
