export default function Games(){
    return(
        <div className='bg-[url("/imagens/tom-sodoge-oO15xC38wj4-unsplash.jpg")] bg-cover bg-fixed flex text-center'>
        <div className="w-1/2 ml-10 p-10">
            <h1 className='text-red-800 text-8xl font-black shadow-lg text-center font-adamcg '>GOING BY THE DARK</h1>
            <p className='text-white text-justify text-xl p-5 bg-black/50 rounded shadow-xl shadow-zinc-900 mb-6 mt-10'>Meu primeiro jogo com arte, direção criativa e roteiro feito por mim. Quatro jovens
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
            <button className='p-5 w-1/2 transition ease-in-out delay-150 hover:scale-105 hover:bg-red-600 bg-red-800 transit text-white text-2xl rounded-full mt-5 hover:'>Saiba mais ➔</button>
        </div>
        <div className='bg-[url("/imagens/Going-trough-the-dark.png")] md:bg-[length:800px_1200px] sm:bg-[length:650px_1000px] bg-no-repeat bg-[right_bottom_-16rem] bg-fixed w-1/2 mix-blend-luminosity '>
        </div>  
    </div>
    )
}