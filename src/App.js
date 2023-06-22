
import './index.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Games from "./components/Games"

export default function App() {
  return (
    <body className='h-screen bg-slate-800 overflow-auto scroll-smooth'>
      <div className=' text-white bg-[url("/imagens/download.jpeg")] bg-cover w-full h-screen bg-fixed' id="home container">
        
        <Header />

        <Home />
      </div>

        <div className="">
          <div className="bg-black text-white p-40 text-center">
              <div className="text-8xl">
                  <h1>PRINCIPAIS PROJETOS</h1>
              </div>
          </div>
              <div className="Jogos">
                  
                 <Games />

              </div>    
        </div>
  </body>    
  );
}
