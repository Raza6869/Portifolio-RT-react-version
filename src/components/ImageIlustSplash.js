import artesplash1 from "../Desenhos/artesplash1.jpg"
import artesplash2 from "../Desenhos/artesplash2.jpg"
import artesplash3 from "../Desenhos/artesplash3.jpg"
import artesplash5 from "../Desenhos/artesplashbw1.jpg"
import artesplash6 from "../Desenhos/artesplashbw2.jpg"
import artesplash7 from "../Desenhos/artesplashbw3.jpg"
import artesplash8 from "../Desenhos/artesplashbw10.jpg"



const splashListData = [
    {splash: artesplash1},
    {splash: artesplash2},
    {splash: artesplash3},
    {splash: artesplash5},
    {splash: artesplash6},
    {splash: artesplash7},
    {splash: artesplash8},
]

export default function ImageIlustraçaoSplash(){
    return(
            <div className="Estilizados">
                <h3 className="text-red-800 text-center p-12 font-bold font-adamcg text-7xl">Splash arts</h3>

                <div className="text-white flex flex-1 overflow-x-auto gap-9 p-12 mx-20 overflow-y-hidden">
                   
                
                    {splashListData.map(function(item){
                        return(
                            <img src={item.splash} alt="Arte splash Raza" className="rounded-2xl w-[600px] shadow-black shadow-xl hover:scale-125 transition ease-in-out"/>    
                        )})}              
                </div>
                <div className="text-white flex gap-5 text-4xl mt-8 justify-center">
                        <button className="bg-red-800 p-3 w-36 rounded-3xl rotate-180">➤</button>
                        <button className="bg-red-800 p-3 w-36 rounded-3xl">➤</button>
                </div>
                
            </div>
     
        )}
    