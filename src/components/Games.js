import { motion } from "framer-motion"

export default function Games(){
    return(
        <div className='bg-[url("/imagens/tom-sodoge-oO15xC38wj4-unsplash.jpg")] bg-cover bg-fixed flex text-center'>
            <motion.div 
            initial={{opacity:0, translateX:-400}}
            whileInView={{opacity: 1, translateX: 0}}
            viewport={{once: true}}
            transition={{
                duration: 1,
                type: "spring",
                delay: .8
            }}
            className="w-1/2 px-16 py-8">
                <h1 className='text-red-800 text-7xl font-black shadow-lg text-center font-adamcg '>GOING THROUGH THE DARK</h1>
                <p className='text-white text-justify text-lg p-5 bg-black/50 rounded shadow-xl shadow-zinc-900 my-5'>Meu primeiro jogo com arte, direção criativa e roteiro feito por mim. Quatro jovens
                    adultos vivem suas vidas acadêmicas em uma pequena cidade no Brasil, mas um 
                    asssassino aparece na cidade para atormenta-los e trazer seus passados a tona,
                    mas, existe mesmo um assassino? Ou eles estão ficando loucos? <br></br> <br></br>
                    
                    Um visual novel RPG/horror cheio de aventura, comédia, mistério, escolhas, terror
                    e arrependimentos. <br></br><br></br>

                    Gostou? nosso primeiro capitulo será disponibilizado no site oficial e posteriormente
                    o jogo completo estará disponivel para venda na Steam e outras plataformas de venda de 
                    games. <br></br><br></br>
                    Tecnologias utilizadas: Javascript, Photoshop, React, Unity, MySQL
                </p>
                <div className="flex gap-3">
                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.8}}
                    transition={{type:"spring", duration: .5}}
                    className='p-5 w-1/2 hover:bg-red-600 bg-red-800 transit text-white text-2xl rounded-full mb-5'>Saiba mais ➔</motion.button>
                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.8}}
                    transition={{type:"spring", duration: .5}}
                    className='p-5 w-1/2 hover:bg-indigo-600 bg-indigo-800 transit text-white text-2xl rounded-full mb-5'>Repositório ★</motion.button>
                </div>
            </motion.div>
        <motion.div 
        initial={{opacity:0, translateX: 400}}
        whileInView={{opacity: 1, translateX: 0}}
        viewport={{once: true}}
        transition={{
            duration: 1,
            type: "spring",
            delay: 1
        }}className='bg-[url("/imagens/Going-trough-the-dark.png")] md:bg-[length:800px_1200px] sm:bg-[length:650px_1000px] bg-no-repeat w-1/2 mix-blend-luminosity bg-center '>
        </motion.div>  
    </div>
    )
}