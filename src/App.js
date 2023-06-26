
import './index.css';


import Header from "./components/Header"
import Home from "./components/Home"
import Games from "./components/Games"
import Desenhos from "./components/Desenhos"
import Contact from './components/Contact';
import AbouMe from './components/About';

export default function App() {
  return (
    <body className='h-screen bg-zinc-950 overflow-auto scroll-smooth'>
      <div className=' text-white bg-home bg-cover w-full h-[800px] bg-fixed' id="home container">
        
        <Header />

        <Home />
      </div>

      <div id='About-me' className='text-white '>
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

             <Desenhos /> 

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

      <div id='footer' className='bg-zinc-950 h-2/4 flex justify-around text-white p-16 font-open text-xl font-medium items-center'>
        <div className=''>
        </div>
            <img src='url("./Desenhos/raza-logo-semfundo.png")' alt='raza logo'/>
        <div>
          <ul className='flex flex-col gap-3'>
            <li className='hover:font-semibold'>Contact</li>
            <li className='hover:font-semibold'>Privacy</li>
            <li className='hover:font-semibold'>Cookies</li>
          </ul>
        </div>

        <div >
          <ul className='flex flex-col gap-3'>
            <li className='hover:font-semibold'>Contact</li>
            <li className='hover:font-semibold'>Privacy</li>
            <li className='hover:font-semibold'>Cookies</li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col gap-3'>
            <li className='hover:font-semibold'>Contact</li>
            <li className='hover:font-semibold'>Privacy</li>
            <li className='hover:font-semibold'>Cookies</li>
          </ul>
        </div>
      </div>

  </body>    
  );
}
