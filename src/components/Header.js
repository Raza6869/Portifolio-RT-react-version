export default function Header(){
    return(
        <header>
            <div className="flex justify-between p-6 items-center">
            <nav>
                <ul className='flex gap-5'> 
                    <li className='text-red-600 hover:text-white hover:scale-125 transition ease duration-75 delay-150'><a href="/">Sobre</a></li>
                    <li className='text-red-600 hover:text-white hover:scale-125 transition ease duration-75 delay-150'><a href="/">Projetos</a></li>
                    <li className='text-red-600 hover:text-white hover:scale-125 transition ease duration-75 delay-150'><a href="/">Contato</a></li>
                </ul>
            </nav>
            <div className="flex gap-2 text-3xl">
                <a href="/"><i className='bx bxl-whatsapp hover:text-red-600 hover:scale-125 transition ease duration-75 delay-150'></i></a>
                <a href="/"><i className='bx bxl-instagram hover:text-red-600 hover:scale-125 transition ease duration-75 delay-150'></i></a>
                <a href="/"><i className='bx bxl-github hover:text-red-600 hover:scale-125 transition ease duration-75 delay-150' ></i></a>
                <a href="/"><i className='bx bxl-linkedin-square hover:text-red-600 hover:scale-125 transition ease duration-75 delay-150' ></i></a>
            </div>
            </div>    
        </header>
    )
}

