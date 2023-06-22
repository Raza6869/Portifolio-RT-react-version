
import './index.css';

export default function App() {
  return (
    <body className='h-screen bg-slate-800 overflow-auto scroll-smooth'>
      <div className=' text-white bg-[url("/imagens/download.jpeg")] bg-cover w-full h-screen bg-fixed' id="home container">
        <header>
          <div className="flex justify-between p-6 items-center">
              <nav>
                  <ul className='flex gap-5'> 
                      <li className='text-red-600 hover:text-white'><a href="/">Sobre</a></li>
                      <li className='text-red-600 hover:text-white'><a href="/">Projetos</a></li>
                      <li className='text-red-600 hover:text-white'><a href="/">Contato</a></li>
                  </ul>
              </nav>
              <div className="flex gap-2 text-3xl">
                  <i className='bx bxl-whatsapp hover:text-red-600'></i>
                  <i className='bx bxl-instagram hover:text-red-600'></i>
                  <i className='bx bxl-github hover:text-red-600' ></i>
                  <i className='bx bxl-linkedin-square hover:text-red-600' ></i>
              </div>
          </div>    
        </header>

        <div className="flex flex-col gap-5 justify-center items-center relative top-44">
          <div className='flex flex-col gap-2'>
              <h2 className="text-3xl ml-1 text-red-600">Olá! Meu nome é Rafael Thumaza</h2>
              <h1 className='text-8xl'><span className='text-red-600'>FRONT-EN</span>D DEVELOPER</h1>
          </div>
          <div className="flex gap-7 text-4xl">
              <p><span className='text-red-600'> Ilustrador Digital </span></p>
              <p><span className='text-red-600'>|</span></p>
              <p><span className='text-red-600'>Desenv</span>olvedor de Games</p>
              <p>|</p>
              <p>Desgner UI/UX</p>
          </div>
          <div className="text-justify text-2xl">
              <p className='w-[580px] ml-[460px]'>CEO dos (Pa)Ladinos, estudante de Engenharia
                  de software pela UNIASSELVI e construindo um 
                  nome para o Brasil no mercado de games de 
                  terror indie.
              </p>
          </div>
        </div>
      </div>

        <div className="">
          <div className="bg-black text-white p-40 text-center">
              <div className="text-8xl">
                  <h1>PRINCIPAIS PROJETOS</h1>
              </div>
          </div>
              <div className="">
                  
                  <div className='bg-[url("/imagens/tom-sodoge-oO15xC38wj4-unsplash.jpg")] bg-cover bg-fixed flex text-center'>
                      <div className="w-1/2 ml-10 p-10">
                          <h1 className='text-red-800 text-9xl font-bold text-center'>GOING BY THE DARK</h1>
                          <p className='text-white text-justify text-xl p-5 bg-black/50 rounded mt-5'>Meu primeiro jogo com arte, direção criativa e roteiro feito por mim. Quatro jovens
                              adultos vivem suas vidas acadêmicas em uma pequena cidade na Inglaterra, mas um 
                              asssassino aparece na cidade para atormenta-los e trazer seus passados a tona,
                              mas, existe mesmo um assassino? Ou eles estão ficando loucos? <br></br> <br></br>
                              
                              Um visual novel RPG/horror cheio de aventura, comédia, mistério, escolhas, terror
                              e arrependimentos. <br></br><br></br>

                              Gostou? nosso primeiro capitulo será disponibilizado no site oficial e posteriormente
                              o jogo completo estará disponivel para venda na Steam e outras plataformas de venda de 
                              games. <br></br><br></br>
                              Tecnologias utilizadas: Javascript, Photoshop, React, Unity, MySQL
                          </p>
                          <button className='p-5 w-1/2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-red-600 bg-red-800 transit text-white text-2xl rounded-full mt-5 hover:'>Saiba mais ➔</button>
                      </div>
                      <div className='bg-[url("/imagens/Going-trough-the-dark.png")] md:bg-[length:800px_1200px] sm:bg-[length:650px_1000px] bg-no-repeat bg-[right_bottom_-10rem] bg-fixed w-1/2 mix-blend-luminosity '>
                      </div>  
                  </div>
              </div>    
        </div>
  </body>    
  );
}
