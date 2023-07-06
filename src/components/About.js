import razaperfil from "../Desenhos/Raza perfil.jpeg"
import pssvg from "../SVG/photoshop.svg"
import {motion} from "framer-motion"

export default function AbouMe(){
    return(
        <div id='About-me' >    
            <div className="py-20">
                <motion.div 
                  initial={{ opacity: 0, translateX: 200}}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    duration: 1.2,
                    delay: .6
                  }}
                  className='bg-red-900 md:flex md:justify-between md:flex-row-reverse mx-16 rounded-xl md:items-center mb-10 sm:flex-col sm:justify-center sm:items-center'>      
                    <div className='sm:px-28'>
                        <img src={razaperfil} alt='perfil raza' className='md:rounded-xl md:pt-0 sm:rounded-full sm:pt-5 sm:w-full'/>
                    </div>
                    <div className='md:w-3/4 p-9 sm:w-auto'>
                        <h1 className='md:text-6xl sm:text-[35pt] sm:text-center font-adamcg text-left mb-8 '>Um pouco sobre mim</h1>
                        <p className='font-open text-xl text-justify'>
                        Trabalho como freelancer há 1 ano em projetos como Front end, designer e ilustração digital, carregando uma experiência com desenvolvimento 
                        de interface de sites e estrutura de dados. <br/><br/> 
                        Desenvolvo jogos de terror com foco no estilo de arte em pixel e aventuras exploratórias. Quero erguer o mercado brasileiro nos 
                        Horror Indies Games com foco em nossa realidade sociocultural. <br/><br/>
                        Quero fazer jogos para navegadores para melhor acesso da comunidade. Sendo assim, busco oportunidades no mercado como desenvolvedor
                        front-end para aprimorar meu networking e experiência na área. 
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, translateX: -200}}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    duration: 1.2,
                    delay: 1.2}}
                className="text-center text-white flex flex-col gap-10">
                    <h1 className="md:text-7xl sm:text-5xl font-adamcg text-red-600 ">Tecnologias que domino</h1>
                    <div className="flex justify-center md:text-[90pt] sm:text-8xl md:gap-8 sm:gap-1">
                        <motion.i
                        whileHover={{scale: 1.5}}
                        className='bx bxl-html5 '
                        ></motion.i>
                        <motion.i
                        whileHover={{scale: 1.5}}
                        className='bx bxl-css3 '
                        ></motion.i>
                        <motion.i
                        whileHover={{scale: 1.5}}
                        className='bx bxl-tailwind-css '
                        ></motion.i>
                        <motion.i
                        whileHover={{scale: 1.5}}
                        className='bx bxl-javascript '
                        ></motion.i>
                        <motion.i
                        whileHover={{scale: 1.5}}
                        className='bx bxl-react'
                        ></motion.i>
                        <motion.i
                        whileHover={{scale: 1.5}}
                        className='bx bxl-figma'
                        ></motion.i>
                        <motion.img 
                        whileHover={{scale: 1.5}}
                        src={pssvg} 
                        alt="photoshop" 
                        className="md:w-[75pt] sm:w-[60pt]"/>
                    </div>
                </motion.div>
            </div>
           
        </div>
    )
}