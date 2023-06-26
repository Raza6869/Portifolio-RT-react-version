export default function Contact() {
    return(
        <div id='box' className='bg-contact bg-cover p-20 flex flex-row-reverse'>
          <forms className="flex flex-col gap-10 p-10 w-1/2 py-10 bg-red-800 rounded-xl mr-14">
            <h1 className='text-center text-white text-5xl font-open font-bold mb-9'>Deixe seu contato!</h1>
            <input type='text' name='nome' id='name' placeholder={"Seu nome completo"} className='pl-5 h-11 rounded'/>
            <input type='mail' name='mail' id='mail' placeholder={"Seu e-mail"} className='pl-5 h-11 rounded'/>
            <input type='text' name='phone' id='phone' placeholder="Seu telefone" className='pl-5 h-11 rounded'/>
            <input type='text' name='message' id='message' placeholder="Deixe uma mensagem para mim!" className='pl-5 h-24 rounded pb-10'/>
            <div className="flex gap-11 text-8xl justify-center mt-5">
                <a href="/"><i className='bx bxl-whatsapp text-white text-center hover:scale-125 transition ease duration-75 delay-150'></i></a>
                <a href="/"><i className='bx bxl-instagram text-white text-center hover:scale-125 transition ease duration-75 delay-150'></i></a>
                <a href="/"><i className='bx bxl-github text-white text-center hover:scale-125 transition ease duration-75 delay-150' ></i></a>
                <a href="/"><i className='bx bxl-linkedin-square text-white text-center hover:scale-125 transition ease duration-75 delay-150' ></i></a>
            </div>
          </forms>

          <div className='bg-raza-logo bg-contain w-1/2 bg-no-repeat bg-[center_right_3rem]'></div>

          </div>
    )
}