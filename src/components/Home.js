import { motion } from "framer-motion"

export default function Home(){
    return(
        <div className="flex flex-col gap-5 justify-center items-center relative top-32">
            <div className='flex flex-col gap-2'>
                <motion.h2 
                initial={{ opacity: 0, translateX: -200, scale: 1.8 }}
                animate={{ opacity: 1, translateX: 0, scale: 1}}
                transition={{ 
                    type: "spring",
                    duration: 1,
                    delay: .3 }}
                    
                className="md:text-4xl ml-1 text-red-600 tracking-tight sm:text-[17pt] sm:ml-0">Olá! Meu nome é Rafael Thumaza</motion.h2>
                <motion.h1
                initial={{ opacity: 0, translateX: -200}}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ 
                    type: "spring",
                    duration: .5,
                    delay: 1 }}
                className='md:text-8xl font-adamcg tracking-tighter sm:text-6xl'><span className='text-red-600'>FRONT-END</span> DEVELOPER</motion.h1>
            </div>
            <div className="flex md:gap-4 md:text-4xl tracking-normal font-open sm:text-[18pt] sm:gap-0">
                <motion.p initial={{ opacity: 0, translateY: 200}}
                animate={{ opacity: 1, translateY: 0}}
                transition={{ 
                    type: "spring",
                    duration: .5,
                    delay: 1.5 }}><span className='text-red-600'> Ilustrador Digital </span></motion.p>
                <motion.p initial={{ opacity: 0, translateY: 200}}
                animate={{ opacity: 1, translateY: 0}}
                transition={{ 
                    type: "spring",
                    duration: .5,
                    delay: 1.9 }}><span className='text-red-600'>|</span></motion.p>
                <motion.p initial={{ opacity: 0, translateY: 200}}
                animate={{ opacity: 1, translateY: 0}}
                transition={{ 
                    type: "spring",
                    duration: .5,
                    delay: 2.3 }}><span className='text-red-600'>Desenvolve</span>dor de Games</motion.p>
                <motion.p initial={{ opacity: 0, translateY: 200}}
                animate={{ opacity: 1, translateY: 0}}
                transition={{ 
                    type: "spring",
                    duration: .5,
                    delay: 2.7 }}>|</motion.p>
                <motion.p initial={{ opacity: 0, translateY: 200}}
                animate={{ opacity: 1, translateY: 0}}
                transition={{ 
                    type: "spring",
                    duration: .5,
                    delay: 3 }}>Desgner UI/UX</motion.p>
            </div>
            <div className="text-justify md:text-2xl sm:text-lg">
                <motion.p 
                initial={{ opacity: 0, translateX: 200}}
                animate={{ opacity: 1, translateX: 0}}
                transition={{ 
                    type: "spring",
                    duration: .8,
                    delay: 3.4 }}className='md:w-[515px] md:ml-[505px] sm:w-[300px] sm:ml-[350px]'> CEO dos (Pa)Ladinos, estudante de Engenharia
                    de software pela UNIASSELVI e construindo um 
                    nome para o Brasil no mercado de games de 
                    terror indie.
                </motion.p>
            </div>
      </div>
    )
}