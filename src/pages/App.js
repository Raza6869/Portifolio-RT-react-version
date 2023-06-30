
import '../index.css';
import razaLogo from "../Desenhos/raza-logo-semfundo.png"

import Header from "../components/Header"
import Home from "../components/Home"
import Games from "../components/Games"
import DesenhosData from "../components/DesenhosData"
import Contact from '../components/Contact';
import AbouMe from '../components/About';

export default function App() {

  
  return (
    <body className='h-screen bg-zinc-950'>
      <div className=' text-white bg-home bg-cover w-full h-[800px] bg-fixed ' id="home container">
        
        <Header />

        <Home />
      </div>

      <div id='About-me' className='text-white bg-zinc-950'>
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
          <div>

             <DesenhosData /> 

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
