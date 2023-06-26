import razaperfil from "../Desenhos/Raza perfil.jpeg"
import pssvg from "../SVG/photoshop.svg"

export default function AbouMe(){
    return(
        <div>    
            <div >
                <div className='bg-red-900 flex flex-row-reverse m-16 rounded-xl'>      
                    <div className=''>
                        <img src={razaperfil} alt='perfil raza' className='rounded-xl'/>
                    </div>
                    <div className='w-3/4 p-10'>
                        <h1 className='text-6xl font-adamcg text-left mb-8'>Um pouco sobre mim</h1>
                        <p className='font-open text-xl text-justify'>
                        Trabalho como freelancer há 1 ano em projetos de Front end, designer e ilustrador, carregando uma experiência com desenvolvimento 
                        de interface de sites e estrutura de dados. <br/><br/> 
                        Desenvolvo jogos de terror com foco no estilo de arte em pixel e aventuras exploratórias. Quero erguer o mercado brasileiro nos 
                        Horror Indies Games com foco em nossa realidade sociocultural. <br/><br/>
                        Quero fazer jogos para navegadores para melhor acesso da comunidade. Sendo assim, busco oportunidades no mercado como desenvolvedor
                        front-end para aprimorar meu networking e experiência na área. 
                        </p>
                    </div>
                </div>
                <div className="text-center text-white flex flex-col gap-10 mb-24">
                    <h1 className="text-7xl font-adamcg text-red-600 ">Tecnologias que domino</h1>
                    <div className="flex justify-center text-[90pt] gap-8">
                        <i className='bx bxl-html5 hover:scale-110'></i>
                        <i className='bx bxl-css3 hover:scale-110' ></i>
                        <i className='bx bxl-tailwind-css hover:scale-110' ></i>
                        <i className='bx bxl-javascript hover:scale-110' ></i>
                        <i className='bx bxl-react hover:scale-110'></i>
                        <img src={pssvg} alt="photoshop" className="w-[75pt] hover:scale-110"/>
                        <i class='bx bxl-figma hover:scale-110' ></i>
                    </div>
                </div>
            </div>
           
        </div>
    )
}