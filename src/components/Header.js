import {motion} from "framer-motion"

export default function Header(){
    return(
        <motion.header
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            type:"spring",
            duration: 1,
            delay: 3.5
        }}>
            <div className="flex justify-between md:px-16 py-8 items-center sm:px-4 ">
            <nav>
                <ul className='flex gap-10 md:text-lg sm:text-base'> 
                    <motion.li whileHover={{scale: 1.2}} className='text-red-600 hover:text-white'><a href="#About-me">Sobre</a></motion.li>
                    <motion.li whileHover={{scale: 1.2}} className='text-red-600 hover:text-white'><a href="#Projetos">Projetos</a></motion.li>
                    <motion.li whileHover={{scale: 1.2}} className='text-red-600 hover:text-white'><a href="#Contato">Contato</a></motion.li>
                </ul>
            </nav>
            <div className="flex gap-2 text-3xl">
                <a href="/"><motion.i whileHover={{scale: 1.4}} className='bx bxl-whatsapp hover:text-red-600'></motion.i></a>
                <a href="/"><motion.i whileHover={{scale: 1.4}} className='bx bxl-instagram hover:text-red-600'></motion.i></a>
                <a href="/"><motion.i whileHover={{scale: 1.4}} className='bx bxl-github hover:text-red-600' ></motion.i></a>
                <a href="/"><motion.i whileHover={{scale: 1.4}} className='bx bxl-linkedin-square hover:text-red-600'></motion.i></a>
            </div>
            </div>    
        </motion.header>
    )
}

