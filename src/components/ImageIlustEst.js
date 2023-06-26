
import arte2 from "../Desenhos/arte2.jpg"
import arte4 from "../Desenhos/arte4.jpg"
import arte5 from "../Desenhos/arte5.jpg"
import arte6 from "../Desenhos/arte6.jpg"
import arte7 from "../Desenhos/arte7.jpg"
import arte8 from "../Desenhos/arte8.jpg"
import arte10 from "../Desenhos/arte10.jpg"
import arte11 from "../Desenhos/arte11.jpg"
import arte12 from "../Desenhos/arte12.jpg"
import arte13 from "../Desenhos/arte13.jpg"
import arte14 from "../Desenhos/arte14.jpg"
import arte15 from "../Desenhos/arte15.jpg"
import arte17 from "../Desenhos/arte17.jpg"
import arte18 from "../Desenhos/arte18.jpg"


const artListData = [

    {estilizado: arte2},
    {estilizado: arte4},
    {estilizado: arte5},
    {estilizado: arte6},
    {estilizado: arte7},
    {estilizado: arte8},
    {estilizado: arte10},
    {estilizado: arte11},
    {estilizado: arte12},
    {estilizado: arte13},
    {estilizado: arte14},
    {estilizado: arte15},
    {estilizado: arte17},
    {estilizado: arte18},
    
]

export default function ImageIlustraçaoEstilizado(){
    return(
            <div className="Estilizados">
                <h3 className="text-red-800 text-center p-8 font-bold font-adamcg text-7xl">Estilizados</h3>
                
                <div className="text-white flex  overflow-x-auto gap-9 p-12 mx-20  rounded-2xl mb-16 overflow-y-hidden">
                   
                
                    {artListData.map(function(item){
                        return(
                            <img src={item.estilizado} alt="Arte estilizada Raza" className="w-[400px] rounded-2xl shadow-black shadow-xl hover:scale-125 transition ease-in-out"/>    
                        )})}              
                </div>
                <div className="text-white flex gap-5 text-4xl mb-10 mt-8 justify-center">
                        <button className="bg-red-800 p-3 w-36 rounded-3xl rotate-180">➤</button>
                        <button className="bg-red-800 p-3 w-36 rounded-3xl">➤</button>
                </div>
                
            </div>
     
        )}
    