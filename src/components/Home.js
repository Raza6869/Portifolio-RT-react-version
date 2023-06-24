export default function Home(){
    return(
        <div className="flex flex-col gap-5 justify-center items-center relative top-32">
            <div className='flex flex-col gap-2'>
                <h2 className="text-4xl ml-1 text-red-600 tracking-tight">Olá! Meu nome é Rafael Thumaza</h2>
                <h1 className='text-8xl font-adamcg tracking-tighter'><span className='text-red-600'>FRONT-END</span> DEVELOPER</h1>
            </div>
            <div className="flex gap-4 text-4xl tracking-normal font-open">
                <p><span className='text-red-600'> Ilustrador Digital </span></p>
                <p><span className='text-red-600'>|</span></p>
                <p><span className='text-red-600'>Desenvolve</span>dor de Games</p>
                <p>|</p>
                <p>Desgner UI/UX</p>
            </div>
            <div className="text-justify text-2xl">
                <p className='w-[515px] ml-[505px]'> CEO dos (Pa)Ladinos, estudante de Engenharia
                    de software pela UNIASSELVI e construindo um 
                    nome para o Brasil no mercado de games de 
                    terror indie.
                </p>
            </div>
      </div>
    )
}