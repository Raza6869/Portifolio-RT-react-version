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
                  className='bg-red-900 flex justify-between flex-row-reverse mx-16 rounded-xl mb-10'>      
                    <div className=''>
                        <img src={razaperfil} alt='perfil raza' className='rounded-xl'/>
                    </div>
                    <div className='w-3/4 p-9'>
                        <h1 className='text-6xl font-adamcg text-left mb-8'>Um pouco sobre mim</h1>
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
                    <h1 className="text-7xl font-adamcg text-red-600 ">Tecnologias que domino</h1>
                    <div className="flex justify-center text-[90pt] gap-8">
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
                        className="w-[75pt] "/>
                    </div>
                </motion.div>
            </div>
           
        </div>
    )
}