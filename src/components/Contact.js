import { motion } from "framer-motion"

export default function Contact() {
    return(
        <div id='box' className='bg-contact bg-cover p-20 flex flex-row-reverse h-auto'>
          <motion.forms
          initial={{opacity:0, translateX: 200}}
          whileInView={{opacity:1, translateX:0}}
          transition={{
            type:"spring",
            delay: .8
          }}
          className="flex flex-col gap-6  px-10 w-1/2 py-20 bg-red-700 rounded-xl mr-14">
            <h1 className='text-center text-white text-6xl font-adamcg font-bold mb-8'>FALE COMIGO!</h1>
            <lavel for="name" className="text-white text-3xl -mb-4">Nome Completo</lavel>
            <input type='text' name='nome' id='name' placeholder={"Seu nome completo"} className='pl-5 h-11 rounded'/>
            <lavel for="mail" className="text-white text-3xl -mb-4">E-mail</lavel>
            <input type='mail' name='mail' id='mail' placeholder={"Seu e-mail"} className='pl-5 h-11 rounded'/>
            <lavel for="phone" className="text-white text-3xl -mb-4">Número de Contato</lavel>
            <input type='text' name='phone' id='phone' placeholder="Seu telefone" className='pl-5 h-11 rounded'/>
            <lavel for="name" className="text-white text-3xl -mb-4">Deixe uma mensagem para mim!</lavel>
            <input type='text' name='message' id='message' placeholder="Deixe uma mensagem para mim!" className='pl-5 h-24 rounded pb-10'/>
           
          </motion.forms>

          <motion.div 
            initial={{opacity:0, translateX: 200}}
            whileInView={{opacity:1, translateX:0}}
            transition={{
              type:"spring",
              delay: 1.2
            }}className='bg-raza-logo bg-contain w-1/2 bg-no-repeat bg-[center_right_3rem]'></motion.div>

        </div>
    )
}