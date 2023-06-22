export default function Header(){
    return(
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
    )
}

