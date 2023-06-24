
import './index.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Games from "./components/Games"
import Desenhos from "./components/Desenhos"

export default function App() {
  return (
    <body className='h-screen bg-slate-800 overflow-auto scroll-smooth'>
      <div className=' text-white bg-home bg-cover w-full h-[800px] bg-fixed' id="home container">
        
        <Header />

        <Home />
      </div>

      <div className='' id="Projetos">
          <div className='bg-black text-white p-40 text-center bg-raza-logo bg-no-repeat bg-center bg-[length:500px_500px] bg-fixed'>
              <div className='text-8xl '>
                  <h1>PRINCIPAIS PROJETOS</h1>
              </div>
          </div>
          <div className="Jogos">
                    
            <Games />

          </div>    
      </div>
      
      <div className="" id="Desenhos">
          <div className='bg-black text-white p-40 text-center bg-raza-logo bg-no-repeat bg-center bg-[length:500px_500px] bg-fixed'>
              <div className='text-8xl '>
                  <h1>ILUSTRAÇÕES</h1>
              </div>
          </div>
          <div>

             <Desenhos /> 

          </div>
      </div>


  </body>    
  );
}
