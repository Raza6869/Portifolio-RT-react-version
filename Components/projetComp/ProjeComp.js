import fear from "@/Images/Fear.png"
import bloodyCat from "@/Images/BloodyCat.png"

import Image from "next/image"
import "@/app/globals.css"

export default function ProjeComp(){
    return(
        <div className="">
            <div className="h-[70vh] flex justify-center text-center items-center mb-72"> 
                <h1 className="font-delaGothic text-red text-5xl text-center">PROJETOS</h1>    
            </div>
            <div className="text-white bg-blackRed mx-[20%] flex justify-between">
                <div className="w-1/2">
                    <Image src={fear} alt="Going by through the dark" className=""/>
                </div>
                <div className="text-center flex flex-col gap-10 px-5 py-10 w-1/2 bg-[url('../Images/FearBack.png')] bg-blackRed bg-blend-multiply">
                    <div>
                        <h2 className="text-white font-justAnotherHand text-4xl tracking-tighter -mb-3">GOING THROUGH THE</h2>
                        <h1 className="text-red font-vampiroOne text-8xl">DARK</h1>
                    </div>
                    <p className="text-justify text-base">Meu primeiro jogo de terror. Será um point and click game com estilo de arte em pixel.<br/><br/>
                    Nele, o jogador vivenciará na pele de adolescentes em uma viagem de escola à um resort no meio do nada do Nordeste brasileiro.
                    O que até então parecia um simples passeio, com a morte de um aluno, se tornou um ambiente de mistério e desespero .<br/><br/> 
                    Com grande foco na exploração, escolhas, sobrevivência e enigmas,  desvende e sobreviva junto de um grupo de adolescentes o
                    mistério do Resort, e só depende de suas escolhas e estratégias para saber o destino de tudo e todos.</p>
                    <button className="text-black font-bold bg-yellow-400 rounded-xl p-5">EM DESENVOLVIMENTO</button>
                </div>
            </div>
            <div classname="bg-black bg-[url('../Images/ProjectBackground2.png')] bg-center">
                <div>
                    <Image src={bloodyCat} alt="bloody cat" className="px-28 my-10"/>
                </div>
                <div>
                    <h1 className="text-yellow-400 font-justAnotherHand text-7xl text-center mb-10">PROJETOS DE ESTUDOS</h1>
                    <h1 className="text-red font-justAnotherHand text-7xl text-center mb-10">AINDA HÁ MAIS POR VIR...</h1>
                </div>
            </div>
        </div>
    )
}