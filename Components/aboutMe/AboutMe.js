'use client'
import Image from "next/image"
import razaPerfil from "@/Images/RazaPerfil.png"

import { useState } from "react"
import Link from "next/link"

export default function AboutMe(){
    const activatedLink = "text-red text-2xl transition easy-in-out duration-700"
    const inactvatedLink = "text-white/40 text-sm hover:text-white"

    const[active, setActive] = useState("FTD")

    const changeActive = (e) => {
        setActive(e.target.id)
    }

    function TextDesc(){
        if(active === "FTD"){
            return(
                <div className=" text-justify w-[95%]">
                    <p className="mb-8 font-gothic">Trabalho como Freelancer há 1 ano em diversos projetos com Design UI/UX e Construções de Interfaces de aplicações Web,
                    trazendo-me uma carga de experiência com frameworks, como React e Next, estrutura de dados e organização. <br/><br/>
                    Não tem algo mais que me move mais que desenvolver um projeto, vê-lo desde um pequeno protótipo até um projeto sólido e bem
                    construído me fascina. Por este motivo, entrei no ramo da programação. <br/><br/>
                    Busco uma vaga como Front-end Developer e pretendo utilizar e aprimorar meu conhecimento para desenvolver todo tipo de projeto 
                    com eficiência e carinho.<br/><br/>
                    Ta gostando do meu trabalho? Acesse:</p>
                <Link href="/projetos" className="mr-4 text-red border-2 border-red px-8 py-3 rounded-xl text-xl font-bold">PROJETOS</Link>
                <Link href="/resume" className="px-10 py-3 text-xl font-bold text-black bg-red rounded-xl">RESUMO</Link>

                </div>    
                )
        }else if(active === "ILD"){
            return(
                <div className=" text-justify w-[95%]">
                    <p className="mb-8 font-gothic">Desenho desde criança e aprimorei minhas habilidades o suficiente para expressar qualquer sentimento,
                    estética ou ideia a qualquer projeto.<br/><br/>
                    Adoro sair da zona de conforto, porquê só assim é possível chegar a perfeição, então nunca irei desistir do desenho até que ele saia
                    como o planejado.<br/><br/>
                    <span className="text-green-500">Trabalho com: HQs(Inclusive Mangá e Webtoon), Character Design, Anime Realista, Splash Art, Arte para Capa, Horror/Gore médio, Furry
                    e NSFW básico.</span><br/><br/> 
                    <span className="text-red">Não trabalho com: NSFW diferente do comum(Furry, zoofilia, gore...), Mech, Cartoon e Caricatura.</span> <br/><br/>
                    Ta gostando do meu trabalho? Acesse:</p>
                    <Link href="/Desenhos" className="mr-4 text-red border-2 border-red px-8 py-3 rounded-xl text-xl font-bold">DESENHOS</Link>
                </div>   
            )
        }else if(active === "GMD"){
            return(
                <div className=" text-justify w-[95%]">
                    <p className="mb-8 font-gothic">Correndo atrás da minha paixão de infância, depois de zerar Resident Evil 4 e Silent Hill 2
                    várias vezes, pretendo entrar no mercado de desenvolvimento de games e fazer meus próprios games de terror. E também poder
                    contribuir e incentivar os projetos da comunidade gamer brasileira, para que assim o exterior saiba do que o Brasil é capaz.<br/><br/>
                    Horror/Indie point and click e RPGMaker style games são com certeza meus estilos de jogos favoritos, e pretendo me inspirar neles e
                    criar meu próprio estilo de jogo.<br/><br/> 
                    Você é Desenvolvedor(a) de Games e quer uma ajuda, seja em arte, programação ou direção criativa? Troca uma ideia comigo, que faremos
                    mágica em seu projeto!<br/><br/> 
                    Ta gostando do meu trabalho? Acesse:
                    </p>
                    <Link href="/projetos" className="mr-4 text-red border-2 border-red px-8 py-3 rounded-xl text-xl font-bold">Projetos</Link>
                </div>
            )
        }
    }

    return(
        <div className="flex justify-between items-center px-20 mb-40">
            <div className="w-[55vw]">
                <nav>
                    <ul className="text-white font-delaGothic flex gap-4 items-baseline mb-6    ">
                        <li>
                            <input type="radio" name="perfilNav" id="FTD" className="sr-only" onChange={changeActive}/>
                            <label for="FTD" className={active === "FTD" ? activatedLink : inactvatedLink} >FRONT-END DEVELOPER</label>
                        </li>
                        <li>
                            <input type="radio" name="perfilNav" id="ILD" className="sr-only" onChange={changeActive}/>
                            <label for="ILD" className={active === "ILD" ? activatedLink : inactvatedLink}>ILUSTRADOR DIGITAL</label>
                        </li>
                        <li>
                            <input type="radio" name="perfilNav" id="GMD" className="sr-only" onChange={changeActive}/>
                            <label for="GMD" className={active === "GMD" ? activatedLink : inactvatedLink} >GAME DEVELOPER</label>
                        </li>
                    </ul>
                </nav>
                {TextDesc()}
            </div>

            <div>
                <Image src={razaPerfil} alt="me" className="w-[550px]"/>
                <h1 className="uppercase font-delaGothic text-red text-4xl text-center">Rafael thumaza</h1>
            </div>
        </div>
    )
}